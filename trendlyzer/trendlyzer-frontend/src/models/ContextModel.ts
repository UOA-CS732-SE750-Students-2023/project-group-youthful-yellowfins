export interface IAuth {
  userId: string | null;
  email: string | null;
  userName: string | null;
  password: string;
  authError: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface IAuthContext {
  auth: IAuth;
  handleGoogleAuth: () => any;
  handleLogInMethod: (value: any) => any;
  handleRegisterMethod: (value: any) => any;
  handlelogout: () => any;
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
  worldMapTopology: any;
  handleCountryChange: (value: any) => void;
}
