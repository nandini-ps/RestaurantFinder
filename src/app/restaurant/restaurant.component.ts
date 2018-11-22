import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Review } from '../review';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  city: any[];
  restaurants: any[];
  location: String;
  rating: any;
  review: Review;
  res_name: any;
  review_count: any;
  votes: any;
  resid: any;
  user_reviews: any[];

  constructor(private restaurantService: RestaurantService, private router: Router,
    private route: ActivatedRoute) {
  }

  getRestaurants(city) {
    this.location = city;
    this.restaurantService.getRestaurants(city)
      .subscribe(response => {
        this.restaurants = response.restaurants;
        for (const res of this.restaurants) {
          this.resid = res.restaurant.R['res_id'];
        }
        this.restaurantService.getRatings(this.resid).subscribe(
          res => {
          this.review = res;
            this.review_count = this.review.reviews_count;
            this.user_reviews = this.review.user_reviews;
            for (const rev of this.user_reviews) {
              this.rating = rev['review'].rating;
            }
          });
      }, error => {
        return Promise.reject(error.json() || error);
      });
  }


  ngOnInit(): void {

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.location = params.get('location');
        this.getRestaurants(this.location);
      });
  }

}
