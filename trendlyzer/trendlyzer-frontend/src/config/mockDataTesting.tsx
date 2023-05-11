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
    name: 'all',
    code: 'a',
  },
  {
    name: 'Business',
    code: 'b',
  },
  {
    name: 'Health',
    code: 'm',
  }
];

export const mockCountryContextData = {
  countriesList,
  selectedCountry: 'NZ',
  handleCountryChange: () => {},
  mapTopology: {},
  worldMapTopology: {},
};

export const mockCategoryContextData = {
  categoryList,
  selectedCategory: 'All',
  handleCategoryChange: () => {},
};
