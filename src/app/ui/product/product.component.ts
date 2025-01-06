import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../core/models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Subscription, switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, MatProgressBarModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export default class ProductComponent implements OnInit, OnDestroy {
  product!: Product;
  routeSub!: Subscription;
  loading = signal(true);
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  quantity = signal(1);
  ngOnInit(): void {
    this.routeSub = this.route.params
      .pipe(switchMap((params) => this.api.getOneProduct(params['id'])))
      .subscribe((product) => {
        this.product = product;
        this.title.setTitle(`${product.title} - ngDuka`);
        this.loading.set(false);
      });
  }
  operation(params: string) {
    if (params == 'add') {
      this.quantity.update((value) => value + 1);
    } else {
      this.quantity.update((value) => value - 1);
    }
  }
  AddToCard() {
    this.api.CardProduct.update((value) => value + 1);
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
