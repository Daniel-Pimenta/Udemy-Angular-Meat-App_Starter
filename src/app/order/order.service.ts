import { Injectable }          from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem }            from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem }    from "app/order/order-items/order.model";
import { Observable }          from "rxjs/observable";
import "rxjs/add/operator/map"
import { MEAT_JSON_DS }            from "app/app.api"
import { Tools }                   from "app/shared/tools"
import { HttpClient }              from "@angular/common/http";

@Injectable()
export class OrderService {

  tools : Tools = new Tools();

  constructor(private cartService:ShoppingCartService, private httpClient:HttpClient ){
  }

  getItems():CartItem[]{
    return this.cartService.getItems();
  }

  plusItem(item:CartItem){
    this.tools.logMe(`OrderService.plusItem(${item.menuItem.id})`);
    this.cartService.plusItem(item);
  }

  lessItem(item:CartItem){
    this.tools.logMe(`OrderService.lessItem(${item.menuItem.id})`);
    this.cartService.lessItem(item);
  }

  removeItem(item:CartItem){
    this.tools.logMe(`OrderService.removeItem(${item.menuItem.id})`);
    this.cartService.remItem(item);
  }

  clear(){
    this.tools.logMe(`OrderService.clear()`);
    this.cartService.clear();
  }

  //----------------------------------------------------------------------------
  checkOrder(order :Order) :Observable<string> {
    this.tools.logMe(`OrderService.checkOrder(${order.orderItem.length})`);
    return this.httpClient.post<Order>(`${MEAT_JSON_DS}/orders`, order).map(order => order.id);
  }

}
