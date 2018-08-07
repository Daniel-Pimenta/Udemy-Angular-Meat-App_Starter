import { Component, OnInit }   from '@angular/core';
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem }            from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem }            from "app/restaurant-detail/menu-item/menu-item.model";
import { PersistService }      from "app/shared/persist.service";
import { Tools }               from "app/shared/tools"
//
import { trigger, state, style, transition, animate}       from '@angular/animations';
import { keyframes} from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations : [
    trigger('row',[
      state('ready' , style({opacity:1})),
      transition('void => ready',
        animate('300ms 0s ease-in',
        keyframes([
          style({opacity:0,   transform: 'translateX(-30px)',offset:0}),
          style({opacity:0.8, transform: 'translateX( 10px)',offset:0.8}),
          style({opacity:1,   transform: 'translateX(  0px)',offset:1})
        ]))),
        transition('ready => void',
          animate('300ms 0s ease-out',
          keyframes([
            style({opacity:1,   transform: 'translateX(  0px)',offset:0}),
            style({opacity:0.8, transform: 'translateX(-10px)',offset:0.2}),
            style({opacity:0,   transform: 'translateX( 30px)',offset:1})
          ])))
    ])
  ]
})

export class ShoppingCartComponent implements OnInit {

  tools    : Tools = new Tools();
  rowState :string = "ready";

  constructor(
    private shoppingCardService: ShoppingCartService
    //private persistService: PersistService
  ) {
    this.tools.logMe("ShoppingCartComponent... Construtor")
  }

  ngOnInit() {
    this.tools.logMe("ShoppingCartComponent... Iniciando");
    //this.persistService.set('CartItems', this.items());
  }

  items(): CartItem[] {
    return this.shoppingCardService.items;
  }

  clear(){
    this.tools.logMe("ShoppingCartComponent.clear()")
    this.shoppingCardService.clear();
    //this.persistService.remove('CartItems');
  }

  remItem(item :CartItem){
    this.tools.logMe(`ShoppingCartComponent.remItem(${item.menuItem.id})`)
    this.shoppingCardService.remItem(item)
    //this.persistService.set('CartItems', this.items())
  }

  addItem(item :MenuItem){
    this.tools.logMe(`ShoppingCartComponent.addItem(${item.id})`)
    this.shoppingCardService.addItem(item)
    //this.persistService.set('CartItems', this.items())
  }

  getTotal(): number{
    this.tools.logMe("ShoppingCartComponent.getTotal()")
    return this.shoppingCardService.total();
  }

}
