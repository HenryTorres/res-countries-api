import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/icountry';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent {

  @Input() country: ICountry = {
    name: { common: '', official: '' },
    population: '',
    region: '',
    capital: [],
    flags: { png: '', svg: '' }
  }

}
