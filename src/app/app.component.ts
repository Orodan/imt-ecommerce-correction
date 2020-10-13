import { Component, EventEmitter, Input } from '@angular/core';
import { BasketService } from './basket.service';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to IMT Ecommerce';

  get beers(): any[] {
    return this.beersService.beers;
  }

  constructor(public beersService: BeersService, public basketService: BasketService) {}

  add(beer: any): void {
    this.basketService.add(beer);
  }

  getTotal(): number {
    return this.basketService.getTotal();
  }
}
