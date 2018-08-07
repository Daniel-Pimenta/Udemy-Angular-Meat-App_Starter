import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute}      from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant }         from "app/restaurants/restaurant/restaurant.model";
import { Tools }              from "app/shared/tools"

@Component({
  selector:    'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {

  rest : Restaurant;
  tools : Tools = new Tools();

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {
    this.tools.logMe("RestaurantDetailComponent")
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
    this.tools.logMe("Inicia RestaurantDetailComponent...")
    this.restaurantsService.getRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.rest = restaurant )
  }

}
