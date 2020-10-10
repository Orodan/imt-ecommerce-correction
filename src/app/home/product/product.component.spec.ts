import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Product } from '../../model/product';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  function getThumbnailClasses(): { [key: string]: boolean } {
    return fixture.debugElement.query(By.css('.thumbnail')).classes;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.data = new Product('title', 'description', 'photo', 42, 2);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event "addToBasket" when button is clicked', () => {
    spyOn(component.addToBasket, 'emit');
    fixture.nativeElement.querySelector('.btn').click();

    expect(component.addToBasket.emit).toHaveBeenCalled();
  });

  it('should add last class when product stock equals 1', () => {
    expect(getThumbnailClasses().last).toBeFalsy();
    component.data = { title: 'fake product', description: 'fake product', stock: 1, price: 10, photo: null };
    fixture.detectChanges();

    expect(getThumbnailClasses().last).toEqual(true);
  });
});
