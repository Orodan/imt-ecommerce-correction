import { inject, TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service;
  let location;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BasketService ]
    });
  });

  beforeEach(inject([ BasketService ], (serviceInjected: BasketService) => {
    service = serviceInjected;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTotal', () => {
    it('should return 0 when the basket is empty', () => {
      service.basket = [];
      expect(service.getTotal()).toBe(0);
    });

    it('should return 10 when the basket content is composed of a product of 10€', () => {
      service.basket = [ {
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 10,
        stock: 2
      } ];
      expect(service.getTotal()).toBe(10);
    });

    it('should return 30 when the basket content is composed of a product of 10€ and a product of 20€', () => {
      service.basket = [ {
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 10,
        stock: 2
      }, {
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 20,
        stock: 2
      } ]
      expect(service.getTotal()).toBe(30);
    })
  });

  describe('addToBasket', () => {
    it('should add product to basket', () => {
      service.addToBasket({
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 10,
        stock: 2
      });

      expect(service.basket).toEqual([ {
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 10,
        stock: 2
      } ]);
    });
  });

  describe('checkout', () => {
    it('should reset basket to emty', () => {
      service.basket = [ {
        title: "Sweat homme",
        description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
        photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
        price: 10,
        stock: 2
      } ]
      service.checkout();
      expect(service.basket).toEqual([]);
    });
  })
});
