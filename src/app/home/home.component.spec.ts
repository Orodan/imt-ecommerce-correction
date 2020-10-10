import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ],
      providers: [ { provide: 'welcomeMsg', useValue: 'Welcome on unit test' } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    component.products = [
      { title: 'fake product', description: 'fake product', stock: 1, price: 10, photo: null },
      { title: 'fake product 2', description: 'fake product 2', stock: 3, price: 20, photo: null }
    ];

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the basket total', () => {
    // Given
    component.addToBasket(component.products[0]);
    component.addToBasket(component.products[1]);
    // When
    fixture.detectChanges();
    // Then
    expect(fixture.debugElement.query(By.css('header p')).nativeElement.textContent).toBe('Votre panier s\'élève à €30.00');
  });

  it('should display the product list', () => {
    // Given
    // When
    fixture.detectChanges();
    // Then
    expect(fixture.debugElement.queryAll(By.css('app-product')).length).toBe(component.products.length);
  });

  it('should not display a product with no stock', () => {
    // Given
    component.products[0].stock = 0;
    // When
    fixture.detectChanges();
    // Then
    expect(fixture.debugElement.queryAll(By.css('app-product')).length).toBe(component.products.length - 1);
  });

});
