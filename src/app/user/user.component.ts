import { Component, EventEmitter, Input, Output, computed, input} from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User{
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input is a decorator that signifies what attributes you can pass through app-user
  // @Input({required:true}) avatar!:string  // '!' means conditional and ':' means the type of the value received (typescript)
  // @Input({required:true}) name!:string   // the required true will ensure that you must pass name attr else it will give an error
  // @Input({required:true}) id!: string

  @Input({required : true}) user !: User;
  @Input({required: true}) selected !: boolean;

  @Output() select = new EventEmitter<string>();  //doing type check of the arg

  //signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/'+this.avatar())

  get imagePath(){
    // return 'assets/users/'+this.avatar;
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser(){
    // this.select.emit(this.id)
    this.select.emit(this.user.id)
  }
}
