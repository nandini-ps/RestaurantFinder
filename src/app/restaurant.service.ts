import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class RestaurantService {
    city: string;
    private headers = new Headers({ 'Accept': 'application/json', 'user-key': '' });
    constructor(private http: Http) { }

    getRestaurants(city) {
        this.city = city;
        return this.http.get(environment.api.zomato_url + 'search?entity_type=city&q=/' + city, { headers: this.headers })
            .map(response => response.json())
            .catch(error => Promise.reject(error.json() || error));
    }
    getLocations(): Observable<string[]> {
        return Observable.of(['Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad']);
    }
    getRatings(resId) {
        return this.http.get(environment.api.zomato_url + 'reviews?res_id=/' + resId, { headers: this.headers })
            .map(response => response.json())
            .catch(error => Promise.reject(error.json() || error));
    }

}
