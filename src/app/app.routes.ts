import { Routes } from '@angular/router';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';

export const routes: Routes = [
    { path: 'detail/:ccn3', component: CountryDetailPageComponent },
    { path: '', component: CountriesPageComponent }
];
