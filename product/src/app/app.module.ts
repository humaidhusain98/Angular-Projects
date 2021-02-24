import { FooterComponent } from '././footer/footer.component';
import { NavComponent } from './Components/Shared/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneComponent } from './phone/phone.component';
import { BillingComponent } from './billing/billing.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { fromEventPattern } from 'rxjs';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './Components/shopping-cart/filters/filters.component';
import { CartItemComponent } from './Components/shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from './Components/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './Components/shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './Components/shopping-cart/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PhoneComponent,
    BillingComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
