export const countriesList = [
  {
    name: 'New Zealand',
    code: 'NZ',
  },
  {
    name: 'Singapore',
    code: 'SG',
  },
  {
    name: 'United States',
    code: 'US',
  },
];

export const categoryList = [
  {
    name: 'All categories',
    code: 'All',
  },
  {
    name: 'Arts & Entertainment',
    code: 3,
  },
  {
    name: 'Autos & Vehicles',
    code: 47,
  },
];

export const mockCountryContextData = {
  countriesList,
  selectedCountry: 'NZ',
  handleCountryChange: () => {},
  mapTopology: {},
};

export const mockCategoryContextData = {
  categoryList,
  selectedCategory: 'All',
  handleCategoryChange: () => {},
};
