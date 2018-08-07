import { Component, OnInit, Input, EventEmitter, Output }  from '@angular/core';
import { trigger, state, style, transition, animate}       from '@angular/animations'
import { ActivatedRoute}      from '@angular/router'
import { MenuItem }           from "app/restaurant-detail/menu-item/menu-item.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Tools }              from "app/shared/tools"

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations : [
    trigger('menuItemAparece',[
      state('ready' , style({opacity:1})),
      transition('void => ready', [
        style({opacity:0, transform: 'translateY(-100px)'}),
        animate('600ms 0s ease-in-out')
      ])
    ])
  ]
})

export class MenuItemComponent implements OnInit {

  @Input() menuItem : MenuItem;
  @Output() add = new EventEmitter();
  tools : Tools = new Tools();

  menuItemState :string = "ready";

  constructor() {
    this.tools.logMe("MenuItemComponent")
  }

  emitAddEvent() {
      this.add.emit(this.menuItem)
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
  }

}
