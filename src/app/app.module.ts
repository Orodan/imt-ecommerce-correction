import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './home/product/product.component';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {BasketComponent} from './basket/basket.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        MenuComponent,
        HomeComponent,
        BasketComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        { provide: 'welcomeMsg', useValue: 'Bienvenue sur IMT Ecommerce' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
