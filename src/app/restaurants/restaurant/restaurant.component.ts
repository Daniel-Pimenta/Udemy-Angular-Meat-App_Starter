import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'
import { Restaurant }               from "app/restaurants/restaurant/restaurant.model";
import { Tools }                    from "app/shared/tools"

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations : [
    trigger('restaurantAparece',[
      state('ready' , style({opacity:1})),
      transition('void => ready', [
        style({opacity:0, transform: 'translate(-100px, -100px)'}),
        animate('600ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  tools : Tools = new Tools();
  restState :string = "ready"

  constructor() {
    this.tools.logMe("RestaurantComponent")
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
    this.tools.logMe("Inicia RestaurantComponent...")
  }

}
