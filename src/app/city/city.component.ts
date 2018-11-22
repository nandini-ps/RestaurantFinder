import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  locations: string[];

  constructor(private restaurantService: RestaurantService) { }


  ngOnInit() {
    this.restaurantService.getLocations().subscribe(
      result => {
        this.locations = result;
      });
  }

}
