export interface IThemeProperties {
    elements: string;
    background: string;
    texts: string;
    inputs: string;
    navs: string;
}

export interface Itheme {
    light: IThemeProperties;
    dark?: IThemeProperties;
}

export enum TypeTheme {
    light = 'light',
    dark = 'dark'
}
