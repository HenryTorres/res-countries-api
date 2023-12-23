import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/icountry';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'country-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent {

  constructor(
    private readonly router: Router,
  ) { }

  @Input() country: ICountry = {
    name: { common: '', official: '' },
    population: '',
    region: '',
    capital: [],
    flags: { png: '', svg: '' },
    ccn3: ''
  }

  gotocountry() {
    this.router.navigate(['/detail', this.country.ccn3])
  }

}
