import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/icountry';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private base_url: string = 'https://restcountries.com/v3.1';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<ICountry[]> {
    const endpoint: string = this.base_url + '/all?limit=10';
    return this.http.get<ICountry[]>(endpoint)
      .pipe(
        map(results => {
          const countries: ICountry[] = [];
          results.forEach(item => {
            countries.push({
              name: item.name,
              population: item.population,
              region: item.region,
              capital: item.capital,
              flags: item.flags,
              ccn3: item.ccn3
            });
          })
          return countries;
        }

        )
      );
  }

  getByName(country: string): Observable<ICountry[]> {
    const endpoint: string = this.base_url + '/name/' + country;
    return this.http.get<ICountry[]>(endpoint)
      .pipe(
        map(result => {
          const countries: ICountry[] = [];
          result.forEach(item => {
            countries.push({
              name: item.name,
              population: item.population,
              region: item.region,
              capital: item.capital,
              flags: item.flags,
              ccn3: item.ccn3
            })
          })
          return countries;
        }),
        catchError(err => {
          return of([]);
        })
      )
  }

  getByRegion(region: string): Observable<ICountry[]> {
    const endpoint: string = this.base_url + '/region/' + region;
    return this.http.get<ICountry[]>(endpoint)
      .pipe(
        map(result => {
          const countries: ICountry[] = [];
          result.forEach(item => {
            countries.push({
              name: item.name,
              population: item.population,
              region: item.region,
              capital: item.capital,
              flags: item.flags,
              ccn3: item.ccn3
            })
          })
          return countries;
        }),
        catchError(err => {
          return of([]);
        })
      )
  }
}
