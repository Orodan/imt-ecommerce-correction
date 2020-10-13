import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to IMT Ecommerce';
  beers = [
    {
        "id": 5,
        "name": "Avery Brown Dredge",
        "tagline": "Bloggers' Imperial Pilsner.",
        "first_brewed": "02/2011",
        "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
        "image_url": "https://images.punkapi.com/v2/5.png",
        "abv": 7.2,
        "price": 10,
        "stock": 1
    },
    {
        "id": 7,
        "name": "AB:12",
        "tagline": "Imperial Black Belgian Ale.",
        "first_brewed": "07/2012",
        "description": "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
        "image_url": "https://images.punkapi.com/v2/7.png",
        "abv": 11.2,
        "price": 12,
        "stock": 2
    },
    {
        "id": 10,
        "name": "Bramling X",
        "tagline": "Single Hop IPA Series - 2011.",
        "first_brewed": "01/2011",
        "description": "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
        "image_url": "https://images.punkapi.com/v2/10.png",
        "abv": 7.5,
        "price": 9,
        "stock": 3
    },
    {
        "id": 15,
        "name": "Mixtape 8",
        "tagline": "An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
        "first_brewed": "01/2012",
        "description": "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.",
        "image_url": "https://images.punkapi.com/v2/15.png",
        "abv": 14.5,
        "price": 12.5,
        "stock": 4
    }
  ];
  basket = [];

  add(beer: any): void {
    this.basket.push(beer);
    beer.stock--;
  }

  getTotal(): number {
    return this.basket.reduce((total, beer) => {
      return total + beer.price;
    }, 0);
  }
}
