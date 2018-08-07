import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem }   from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Tools }             from "app/shared/tools"
//import { PersistService } from "app/shared/persist.service";

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() plusItem = new EventEmitter<CartItem>()
  @Output() lessItem = new EventEmitter<CartItem>()
  @Output() removeItem  = new EventEmitter<CartItem>()

  tools : Tools = new Tools();

  constructor(
    //private persistService: PersistService
  ) {
    this.tools.logMe("OrderItemsComponent... Construtor")
  }

  ngOnInit() {
    this.tools.logMe("OrderItemsComponent... Iniciando");
    //this.items = this.persistService.get("CartItems");
  }

  emitPlusItem(item: CartItem){
    this.tools.logMe(`OrderItemsComponent.emitPlusItem(${item.menuItem.id})`);
    this.plusItem.emit(item);
  }
  emitLessItem(item: CartItem){
    this.tools.logMe(`OrderItemsComponent.emitLessItem(${item.menuItem.id})`);
    this.lessItem.emit(item);
  }
  emitRemoveItem(item: CartItem){
    this.tools.logMe(`OrderItemsComponent.emitRemoveItem(${item.menuItem.id})`);
    this.removeItem.emit(item);
  }

}
