
export interface ICountryDetail {
    flags: { png: string, svg: string }
    name: { common: string, official: string };
    nativeName: string;
    population: string;
    region: string;
    subregion: string,
    capital: string[];
    tld: string[];
    currencies: string;
    languages: string;
    borders: string[];
}
