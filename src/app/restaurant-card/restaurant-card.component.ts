import { Component, Input } from '@angular/core';

type Sla = {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
};
type Restaurant = {
  id : string;
  name : string;
  cloudinaryImageId: string;
  locality: string;
  costForTwo: string;
  cuisines: string[];
  avgRatingString: string;
  sla: Sla;
}

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input({required: true}) restaurant !: Restaurant;
}
