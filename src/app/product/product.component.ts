import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  @Output() addToBasket = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(beer: any): void {
    this.addToBasket.emit(beer);
  }

}
