import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'ngDuka',
    loadComponent: () => import('./ui/home/home.component'),
  },
  {
    path: 'products/:category',
    title: 'ngDuka',
    loadComponent: () => import('./ui/products/products.component'),
  },
  {
    path: 'product/:id',
    title: 'ngDuka',
    loadComponent: () => import('./ui/product/product.component'),
  },
  {
    path: 'NotFound',
    title: 'ngDuka',
    loadComponent: () => import('./ui/not-found-page/not-found-page.component'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'NotFound',
  },
];
