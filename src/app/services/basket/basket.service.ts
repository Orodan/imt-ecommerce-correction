import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: Product[] = [];

  constructor() { }

  addProduct(product: Product): void {
    this.basket.push(product);
  }

  getTotal(): number {
    return this.basket.reduce((accumulated, product) => accumulated + product.price, 0);
  }
}
