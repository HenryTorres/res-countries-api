import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'country-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() onSearchCountry = new EventEmitter<string>();

  searchCountry(country: string) {
    if (country) {
      this.onSearchCountry.emit(country);
    }
  }

}
