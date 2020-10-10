import { inject, TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';

describe('CatalogService', () => {
  let product;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CatalogService ]
    });

    product = {
      title: "Sweat homme",
      description: "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME",
      photo: "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png",
      price: 39,
      stock: 2
    };
  });
  beforeEach(inject([ CatalogService ], (serviceInjected: CatalogService) => {
    service = serviceInjected;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAvailable', () => {
    it('should return false when product is not available', () => {
      product.stock = 0;
      expect(service.isAvailable(product)).toBe(false);
    })

    it('should return true when product is available', () => {
      expect(service.isAvailable(product)).toBe(true);
    })
  });

  describe('isTheLast', () => {
    it('should return true when there is only 1 product left', () => {
      product.stock = 1;
      expect(service.isTheLast(product)).toBe(true);
    });

    it('should return false when there is no more product left', () => {
      product.stock = 0;
      expect(service.isTheLast(product)).toBe(false);
    });

    it('should return false when there is 2 product left', () => {
      expect(service.isTheLast(product)).toBe(false);
    });
  });
});
