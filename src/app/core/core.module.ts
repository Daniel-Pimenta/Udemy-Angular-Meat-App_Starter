import { NgModule }            from "@angular/core";

import { OrderService }        from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService }  from "app/restaurants/restaurants.service";
import { LoginService }        from "app/security/login/login.service";

@NgModule({
  declarations: [],
  imports     : [],
  exports     : [],
  providers   : [ShoppingCartService, RestaurantsService, OrderService, LoginService],
  bootstrap   : []
})

export class CoreModule {

}
