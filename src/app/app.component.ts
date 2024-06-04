import { Component } from '@angular/core';
import { DUMMY_RESTAURANTS } from './dummy-restaurants';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RestaurantCardComponent],
})
export class AppComponent {
  restaurants = DUMMY_RESTAURANTS.map((res) => ({
    id: res.info.id,
    name: res.info.name,
    cloudinaryImageId: res.info.cloudinaryImageId,
    locality: res.info.locality,
    costForTwo: res.info.costForTwo,
    cuisines: res.info.cuisines,
    avgRatingString: res.info.avgRatingString,
    sla: res.info.sla,
  }));
}
