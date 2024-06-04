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

  get imagePath(){
    return 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + this.restaurant.cloudinaryImageId;
  }

  //Code for showing stock image when you don't get iamge
  // getImagePath(): string {
  //   if (this.restaurant.cloudinaryImageId) {
  //     return 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + this.restaurant.cloudinaryImageId;
  //   } else {
  //     return 'https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png';
  //   }
  // }
  // onImageError(event: any) {
  //   event.target.src = this.getImagePath(); // Set placeholder image URL
  // }
  
}
