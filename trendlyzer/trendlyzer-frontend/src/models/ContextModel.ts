export interface IAuth {
  userId: string;
  isAuthenticated: boolean;
}

export interface IAuthContext {
  auth: IAuth;
  handleAuth: (value: IAuth) => void;
}

export interface ICategory {
  name: string;
  code: string | number;
}

export interface ICategoryContext {
  categoryList: ICategory[];
  selectedCategory: string;
  handleCategoryChange: (value: any) => void;
}

export interface ICountry {
  code: string;
  name: string;
}

export interface ICountryContext {
  countriesList: ICountry[];
  selectedCountry: string;
  mapTopology: any;
  handleCountryChange: (value: any) => void;
}
