import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { Tools }             from "app/shared/tools"

export class CartItem {

  tools : Tools = new Tools();

  constructor(public menuItem: MenuItem,  public qtd:number=1){
  }

  valor(): number{
    return this.menuItem.price * this.qtd;
  }
}
