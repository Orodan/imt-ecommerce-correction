import { Injectable } from '@angular/core';
import { Product } from '../model/product';

const products: Product[] = [
  {
    title: 'Tee-Shirt homme',
    description: '<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5c04fe8e756a4d759cc61e08/Mockups/front.png',
    price: 39,
    stock: 2
  },
  {
    title: 'Tee-Shirt homme',
    description: 'TEE-SHIRT BIO À COL ROND - HOMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
    price: 19,
    stock: 2
  },
  {
    title: 'Tee-Shirt femme',
    description: 'TEE-SHIRT BIO À COL ROND - FEMME',
    photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
    price: 19,
    stock: 2
  },
  {
    title: 'Tote bag',
    description: '<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOAO7SeCyk0-WnWDHCmiHO-9mIrwaziAY6c4ZxjzzfoFUjybE',
    price: 12.5,
    stock: 2
  }
];


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() {
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  getProductsFromNetwork = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject('Error 500 - the server failed');
        }
        resolve(products);
      }, 500);
    });
  }
}
