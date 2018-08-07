import { Component, OnInit }  from '@angular/core';
import { Restaurant }         from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Tools }              from "app/shared/tools";
import { Observable }         from 'rxjs/Observable';

import { trigger, state, style, transition, animate} from '@angular/animations';
import { FormBuilder, FormControl, FormGroup}        from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector   : 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations : [
    trigger('search-visibility',[
      state('hiddem' , style({opacity:0, "max-height": "0px"})),
      state('visible', style({opacity:1, "max-width": "500px", "max-height": "70px", "margin-top":"20px"})),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  rests       :Restaurant[];
  tools       : Tools = new Tools();
  searchState : string = "hiddem";

  searchVisibility(){
    if (this.searchState === "visible") {
      this.searchState = "hiddem";
    }else{
      this.searchState = "visible";
    }
  }

  searchForm    :FormGroup;
  searchControl :FormControl;

  constructor(private restaurantsService: RestaurantsService, private formBuilder:FormBuilder) {
    this.tools.logMe("RestaurantsComponent")
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
    this.tools.logMe("Inicia RestaurantsComponent...")

    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({searchControl: this.searchControl});

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      //.do(search => this.tools.logMe(`q=${search}`))
      .switchMap(search => this.restaurantsService
        .getRestaurants(search)
        .catch(error => Observable.from([]))
      ).subscribe(restaurants => this.rests = restaurants);

    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.rests = restaurants );
  }

}
