import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket = [];

  constructor() { }

  add(beer: any): void {
    this.basket.push(beer);
    beer.stock--;
  }

  getTotal(): number {
    return this.basket.reduce((total, beer) => {
      return total + beer.price;
    }, 0);
  }
}
