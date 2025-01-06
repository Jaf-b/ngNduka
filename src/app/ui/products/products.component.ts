import { Component, input } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  template: `
    <main class="max-width">
      <app-product-list
        [queryParams]="category()"
        [sectionTitle]="category()"
      />
      <br />
      <app-product-list
        [queryParams]="'allProduct'"
        [sectionTitle]="'vous aimeriez peut être ceci'"
      />
      <br />
    </main>
  `,
  styles: [``],
})
export default class ProductsComponent {
  category = input('category');
}
