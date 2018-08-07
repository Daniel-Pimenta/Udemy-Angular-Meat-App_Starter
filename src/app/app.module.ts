// *************************  Modules
import { BrowserModule }             from '@angular/platform-browser';
import { NgModule, LOCALE_ID }       from '@angular/core';
import { HttpClientModule }                from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule }               from '@angular/forms';
import { ReactiveFormsModule }       from '@angular/forms';
import { PersistenceModule }         from 'angular-persistence';
import { ROUTES }                    from 'app/app.routes'
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
// **************************  Custom Modules
import { SharedModule }              from 'app/shared/shared.module'
// **************************  Componentes
import { AppComponent }              from './app.component';
import { HeaderComponent }           from './header/header.component';
import { HomeComponent }             from './home/home.component';
import { RestaurantComponent }       from './restaurants/restaurant/restaurant.component'
import { RestaurantsComponent }      from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent }             from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent }     from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent }         from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent }          from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent }     from './order-summary/order-summary.component';
// **************************  Serviços
import { PersistService }            from './shared/persist.service';
// **************************  Outros
import { Tools }                     from './shared/tools';
import { NotFoundComponent }         from "app/not-found/not-found.component";
import { LoginComponent } from './security/login/login.component';
//import { LocationStrategy, HashLocationStrategy }  from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PersistenceModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules})
  ],
  providers: [
    PersistService,
    //{provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
