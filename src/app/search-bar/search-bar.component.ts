import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() search = new EventEmitter<string>();

  onInputChange(event: any): void {
    this.searchQuery = event.target.value; 
  }

  onSearch(): void {
    this.search.emit(this.searchQuery); 
  }
}
