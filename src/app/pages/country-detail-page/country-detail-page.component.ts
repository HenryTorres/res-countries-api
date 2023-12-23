import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryDetailService } from './services/country-detail.service';
import { ICountryDetail } from './interfaces/icountry-detail';

@Component({
  selector: 'app-country-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './country-detail-page.component.html',
  styleUrl: './country-detail-page.component.css'
})
export class CountryDetailPageComponent implements OnInit {

  myCountry: ICountryDetail = {
    flags: { png: '', svg: '' },
    name: { common: '', official: '' },
    nativeName: '',
    population: '',
    region: '',
    subregion: '',
    capital: [],
    tld: [],
    currencies: '',
    languages: '',
    borders: []

  };

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: CountryDetailService
  ) { }

  ngOnInit(): void {
    const code: string = this.route.snapshot.params['ccn3'];

    this.service.getDetailByName(code).subscribe({
      next: (response => {
        this.myCountry = response;
      })
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  goCountry(ccn3: string) {
    console.log(ccn3);
    this.router.navigate(['/detail', ccn3]);
  }
}
