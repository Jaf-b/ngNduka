import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'https://fakestoreapi.com/';
  http = inject(HttpClient);

  getAllProduct = (categorie: string) =>
    this.http.get(`https://fakestoreapi.com/${categorie}`);
}
