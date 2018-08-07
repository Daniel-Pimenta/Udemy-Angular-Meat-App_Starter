import { NgModule, ModuleWithProviders }             from '@angular/core';
import { FormsModule }          from "@angular/forms";
import { ReactiveFormsModule }  from "@angular/forms";
import { CommonModule }         from "@angular/common";
//
import { InputComponent }       from "app/shared/input/input.component";
import { RadioComponent }       from "app/shared/radio/radio.component";
import { RatingComponent }      from "app/rating/rating.component";
import { SnackbarComponent }   from './messages/snackbar/snackbar.component';

import { OrderService }        from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService }  from "app/restaurants/restaurants.service";
import { NotificationService } from "app/shared/messages/notification.service";
import { LoginService }        from "app/security/login/login.service";

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports     : [FormsModule, ReactiveFormsModule, CommonModule ],
  exports     : [
    InputComponent, RadioComponent, RatingComponent,
    FormsModule, ReactiveFormsModule, CommonModule,
    SnackbarComponent
  ],
  providers   : [],
  bootstrap   : []
})

export class SharedModule {
  static forRoot() : ModuleWithProviders {
    return{
      ngModule  : SharedModule,
      providers : [ShoppingCartService, RestaurantsService, OrderService, NotificationService, LoginService]
    }
  }
}
