import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesService } from './services/countries.service';
import { ICountry } from './interfaces/icountry';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [SearchComponent, FilterComponent, CountryCardComponent],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.css'
})
export class CountriesPageComponent implements OnInit {

  countries: ICountry[] = [];
  constructor(private readonly service: CountriesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      results => {
        this.countries = results;
      }
    );
  }

  searchCountry(country: string) {
    this.service.getByName(country).subscribe({
      next: result => {
        this.countries = result;
      }
    })
  }

  filterCountry(region: string) {
    this.service.getByRegion(region).subscribe(
      result => {
        this.countries = result;
      }
    )
  }
}
