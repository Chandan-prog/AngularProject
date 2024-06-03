import { Component, EventEmitter, Input, Output, computed, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input is a decorator that signifies what attributes you can pass through app-user
  @Input({required:true}) avatar!:string  // '!' means conditional and ':' means the type of the value received (typescript)
  @Input({required:true}) name!:string   // the required true will ensure that you must pass name attr else it will give an error
  @Input({required:true}) id!: string

  @Output() select = new EventEmitter();

  //signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/'+this.avatar())

  get imagePath(){
    return 'assets/users/'+this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id)
  }
}
