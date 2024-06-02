import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex];  //this is called public property which is defined so that we can read dynamic data in html file

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser(){
     // console.log(this.selectedUser.name);
  //   const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  //Signals are more efficient than zone.js

  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser(){
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
  
}
