import { Component, Inject, OnInit } from '@angular/core';

import { BasketService } from '../basket/basket.service';
import { Product } from '../model/product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(@Inject('welcomeMsg') public title: string, private catalogService: CatalogService, public basketService: BasketService) {}

  ngOnInit(): void {
    this.catalogService.getProductsFromNetwork().then(produits => this.products = produits)
  }

  getTotal(): number {
    return this.basketService.getTotal();
  }

  addToBasket(product: Product) {
    product.stock--;
    this.basketService.addToBasket(product);
  }

  isAvailable(product: Product): boolean {
    return this.catalogService.isAvailable(product);
  }
}
