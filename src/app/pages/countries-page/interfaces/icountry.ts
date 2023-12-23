export interface ICountry {
    name: { common: string, official: string };
    population: string;
    region: string;
    capital: string[];
    flags: { png: string, svg: string };
    ccn3: string
}
