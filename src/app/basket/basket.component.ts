import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

import { Product } from '../model/product';
import { BasketService } from "./basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: [ './basket.component.scss' ]
})
export class BasketComponent implements OnInit {
  basket: Product[] = [];
  customer: Customer;

  constructor(private router: Router, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basket = this.basketService.basket;
    this.customer = new Customer();
  }

  checkout() {
    this.basketService.checkout();
    this.router.navigate([ '' ]);
  }
}
