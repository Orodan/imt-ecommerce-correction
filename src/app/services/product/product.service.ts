import { Injectable } from '@angular/core';

import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      title: 'Men Sweatshirt',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      description: 'C0D1NG_TH3_W0RLD BIO HOODIE - MEN',
      price: 39,
      stock: 3
    },
    {
      title: 'Men T-Shirt',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
      description: 'BIO T-SHIRT WITH CREWNECK - MEN',
      price: 19,
      stock: 5
    },
    {
      title: 'T-Shirt women',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
      description: 'BIO T-SHIRT WITH CREWNECK - WOMEN',
      price: 30,
      stock: 2
    },
    {
      title: 'Tote bag',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
      description: 'C0D1NG_TH3_W0RLD, BIO TOTE BAG',
      price: 12.50,
      stock: 1
    }
  ];

  constructor() { }

  decreaseStock(product: Product): void {
    product.stock--;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }
}
