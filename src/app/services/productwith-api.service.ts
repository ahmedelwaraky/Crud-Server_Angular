import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductwithAPIService {
  baseURL: string = '  http://localhost:3008/product';
  constructor(private http: HttpClient) {}

  //get all product
  getAllProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseURL);
  }

  //get product by id
  getProductById(productId: number) {
    return this.http.get(`${this.baseURL}/${productId}`);
  }

  //add product
  addNewProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }

  //editproduct
  editProduct(productId: number, product: any) {
    return this.http.put(`${this.baseURL}/${productId}`, product);
  }

  //delete product
  removeProduct(productId: number) {
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
}
