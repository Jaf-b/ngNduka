import { Product } from './../../../core/models/products.model';
import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, MatIconModule, MatProgressBarModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  loading = signal(true);
  products!: Product[];
  private api = inject(ApiService);
  sectionTitle = input.required<string>();
  queryParams = input.required<string>();
  queryLimitCount = input<number>();
  productsSub?: Subscription;
  private router = inject(Router);
  private title = inject(Title);
  ngOnInit(): void {
    const product$ =
      this.queryParams() === 'allProduct'
        ? this.api.getProducts()
        : this.api.getAllProduct(this.queryParams(), this.queryLimitCount());
    this.productsSub = product$.subscribe((product) => {
      this.products = product;
      if (this.router.url.includes('products')) {
        this.title.setTitle(`${product[0].category} - ngDuka`);
      }
      this.loading.set(false);
    });
  }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
}
