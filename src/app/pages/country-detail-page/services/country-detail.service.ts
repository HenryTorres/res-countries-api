import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ICountryDetail } from '../interfaces/icountry-detail';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailService {
  private base_url: string = 'https://restcountries.com/v3.1';

  constructor(private readonly http: HttpClient) { }

  getDetailByName(code: string): Observable<ICountryDetail> {
    const endpoint: string = this.base_url + '/alpha/' + code;
    return this.http.get<ICountryDetail[]>(endpoint)
      .pipe(
        map(response => {

          const native = Object.values(Object.values(Object.values(response[0].name)[2])[0])[1];
          const currency = Object.values(Object.values(response[0].currencies)[0])[0];
          const lang = Object.values(response[0].languages).toString();

          const country: ICountryDetail = {
            name: response[0].name,
            flags: response[0].flags,
            nativeName: native,
            population: response[0].population,
            region: response[0].region,
            capital: response[0].capital,
            subregion: response[0].subregion,
            tld: response[0].tld,
            currencies: currency,
            languages: lang,
            borders: response[0].borders
          }
          return country;
        }),

      )
  }
}
