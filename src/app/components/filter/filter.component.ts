import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'country-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output() onFilterByRegion = new EventEmitter<string>()

  filterByRegion(region: string) {
    this.onFilterByRegion.emit(region);
  }

}
