export interface ICountry {
  code: string;
  name: string;
}

export interface ICountryResponse {
  cca2: string;
  name: { common: string };
}
