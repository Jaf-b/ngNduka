import { Component } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { title } from 'process';
import { category } from '../../core/models/products.model';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `<section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour le demo Http Client en Angular</h3>
      <input placeholder="Rechercher dans Soko" type="text" />
    </section>
    @for(category of paramsCard; track $index){
    <br />
    <app-product-list
      [queryLimitCount]="category.limitCount"
      [queryParams]="category.queryParams"
      [sectionTitle]="category.title"
    />
    }
    <br /> `,
  styles: [
    `
      .hero-section {
        background: linear-gradient(to right, #ff7f7f, #ffb6c1);
        padding: 2rem;

        input {
          width: 50vw;
          padding: 0.5rem;
          font-size: 1rem;
          font-family: Poppins;
        }
      }
    `,
  ],
})
export default class HomeComponent {
  paramsCard: category[] = [
    {
      title: 'electronique',
      queryParams: 'electronics',
      limitCount: 4,
    },
    {
      title: 'Vetements pour hommes',
      queryParams: "men's clothing",
      limitCount: 4,
    },
    {
      title: 'Bijoux',
      queryParams: 'jewelery',
      limitCount: 4,
    },
    {
      title: 'vetements pour femmes',
      queryParams: "women's clothing",
      limitCount: 4,
    },
  ];
}
