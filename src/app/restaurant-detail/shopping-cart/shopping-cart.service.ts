import { MenuItem }            from "app/restaurant-detail/menu-item/menu-item.model";
import { CartItem }            from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Tools }               from "app/shared/tools"
import { Injectable }          from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];
  tools : Tools = new Tools();

  constructor(private notificationService : NotificationService){

  }

  clear(){
    this.tools.logMe("ShoppingCartService.clear()")
    this.items = []
  }
  // ---------------------------------------------------------------------------
  getItems(){
    return this.items;
  }

  plusItem(item:CartItem){
    this.tools.logMe(`ShoppingCartService.plusItem(${item.menuItem.id})`)
    this.addItem(item.menuItem);
  }

  lessItem(item:CartItem){
    this.tools.logMe(`ShoppingCartService.lessItem(${item.menuItem.id})`)
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.menuItem.id)
    foundItem.qtd =foundItem.qtd -1;
    if (foundItem.qtd === 0){
      this.remItem(item);
    }
  }

  removeItem(item:CartItem){
    this.tools.logMe(`ShoppingCartService.lessItem(${item.menuItem.id})`)
    this.remItem(item);
  }
  // ---------------------------------------------------------------------------
  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if (foundItem){
      foundItem.qtd =foundItem.qtd +1;
    }else{
      this.items.push(new CartItem(item));
    }
    this.tools.logMe(`ShoppingCartService.addItem(${item.id}) Qtd na array: ${this.items.length}`)
    this.notificationService.notify(`Voce adicionou o item: ${item.name}`)
  }

  remItem(item:CartItem){
    let indice :number = this.items.indexOf(item);
    this.tools.logMe(`Indice do Array:${indice}`);
    this.tools.logMe(`ShoppingCartService.remItem(${item.menuItem.id}) Qtd no array: ${this.items.length}`)
    this.items.splice(indice,1);
    this.tools.logMe(`ShoppingCartService.remItem(${item.menuItem.id}) Qtd no array: ${this.items.length}`)
    this.notificationService.notify(`Voce removel o item: ${item.menuItem.name}`)
  }

  total() :number{
    this.tools.logMe("ShoppingCartService.total()")
    return this.items.map(item => item.valor()).reduce((prev, value)=> prev+value, 0)
  }

}
