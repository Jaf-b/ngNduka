import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'https://fakestoreapi.com';
  http = inject(HttpClient);
  CardProduct = signal(0);

  getAllProduct = (categorie: string, limitCount?: number) => {
    const queryParams = limitCount ? `?limit=${limitCount}` : '';

    return this.http.get<Product[]>(
      `${this.API_URL}/products/category/${categorie}${queryParams}`
    );
  };
  getProducts = () => this.http.get<Product[]>(`${this.API_URL}/products`);
  getOneProduct = (id: number) =>
    this.http.get<Product>(`${this.API_URL}/products/${id}`);
}
