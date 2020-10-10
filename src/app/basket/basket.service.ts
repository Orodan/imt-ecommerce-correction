import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public basket: Product[] = [];

  constructor() {
  }

  getTotal(): number {
    return this.basket.reduce((previous, next) => previous + next.price, 0);
  }

  addToBasket(product: Product): void {
    this.basket.push(product);
  }

  checkout(): void {
    this.basket = [];
  }
}
