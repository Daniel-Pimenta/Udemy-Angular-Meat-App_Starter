import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute}      from '@angular/router'
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { MenuItem }           from "app/restaurant-detail/menu-item/menu-item.model";
import { Tools }              from "app/shared/tools"

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu : MenuItem[]
  tools : Tools = new Tools();
  
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {
    this.tools.logMe("MenuComponent")
  }

  addMenuItem(item :MenuItem){
    this.tools.logMe(`MenuComponent.addMenuItem(${item.id})`)
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
    this.tools.logMe("Inicia MenuComponent...")
    this.restaurantsService.getMenuByRestaurantId(this.route.parent.snapshot.params['id'])
      .subscribe(menu => this.menu = menu )
  }

}
