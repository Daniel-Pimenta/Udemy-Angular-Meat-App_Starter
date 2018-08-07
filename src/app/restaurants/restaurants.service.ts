import { Injectable }   from "@angular/core";
import { Restaurant }   from "app/restaurants/restaurant/restaurant.model";
import { MEAT_JSON_DS } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable }   from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { MenuItem }     from "app/restaurant-detail/menu-item/menu-item.model";
import { Review }       from "app/restaurant-detail/reviews/reviews.model";
import { Tools }        from "app/shared/tools"
import { HttpClient, HttpParams }   from "@angular/common/http";

@Injectable()
export class RestaurantsService {

  tools : Tools = new Tools();

  constructor(private http: HttpClient){
    this.tools.logMe("Restaurant Service...")
  }

  getRestaurants(search?:string): Observable<Restaurant[]> {
    this.tools.logMe(`Restaurant Service -> getRestaurants(${search})`)
    let params :HttpParams = undefined;
    if (search){
      params = new HttpParams().set('q',search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_JSON_DS}/restaurants`, {params:params})
  }

  getRestaurantById(id:string): Observable<Restaurant> {
    this.tools.logMe(`Restaurant Service -> getRestaurantById(${id})`)
    return this.http.get<Restaurant>(`${MEAT_JSON_DS}/restaurants/${id}`)
  }

  getMenuByRestaurantId(id:string): Observable<MenuItem[]> {
    this.tools.logMe(`Restaurant Service -> getMenuByRestaurantId(${id})`)
    return this.http.get<MenuItem[]>(`${MEAT_JSON_DS}/menu?restaurantId=${id}`)
  }

  getReviewsByRestaurantId(id:string): Observable<Review[]> {
    this.tools.logMe(`Restaurant Service -> getReviewsByRestaurantId(${id})`)
    return this.http.get<Review[]>(`${MEAT_JSON_DS}/reviews?restaurantId=${id}`)
  }

}
