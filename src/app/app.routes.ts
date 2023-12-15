import { Routes } from '@angular/router';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';

export const routes: Routes = [
    { path: 'countries', component: CountriesPageComponent },
    { path: 'detail', component: CountryDetailPageComponent }
];
