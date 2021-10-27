import { Component } from '@angular/core';

import { Product } from './model/product';
import { BasketService } from './services/basket/basket.service';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMT ecommerce';

  constructor(private productService: ProductService, private basketService: BasketService) {}

  getProducts(): Product[] {
    return this.productService.products;
  }

  getTotal(): number {
    return this.basketService.getTotal();
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }

  addProductToBasket(product: Product) {
    this.basketService.addProduct(product);
    this.productService.decreaseStock(product);
  }
}
