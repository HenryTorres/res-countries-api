import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { CountryCardComponent } from '../../components/country-card/country-card.component';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [SearchComponent, FilterComponent, CountryCardComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.css'
})
export class CountriesPageComponent {

}
