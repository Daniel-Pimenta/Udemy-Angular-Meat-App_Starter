import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute}      from '@angular/router'
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Review }             from "app/restaurant-detail/reviews/reviews.model";
import { Observable }         from "rxjs/observable";
import { Tools }              from "app/shared/tools"

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})

export class ReviewsComponent implements OnInit {

  reviewIten : Review
  reviews    : Observable<any>
  tools      : Tools = new Tools();

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {
    this.tools.logMe("ReviewsComponent")
  }

  ngOnInit() {
    // Inicia o ciclo de vida do Componente.
    this.tools.logMe("Inicia ReviewsComponent...")
    //this.restaurantsService.getReviewsByRestaurantId(this.route.snapshot.params['id']).subscribe(reviews => this.reviews = reviews )
    this.reviews = this.restaurantsService.getReviewsByRestaurantId(this.route.parent.snapshot.params['id'])
  }

}
