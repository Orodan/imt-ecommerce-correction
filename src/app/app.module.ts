import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
