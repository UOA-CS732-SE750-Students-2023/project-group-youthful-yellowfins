import React, { createContext, useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { getAllCountriesCode } from '../services/dashboardService';
import { ICountryResponse } from '../models/common';
import { ICountryContext } from '../models/ContextModel';

const defaultState = {
  countriesList: [],
  selectedCountry: 'NZ',
  handleCountryChange: () => {},
};

export const CountriesContext = createContext<ICountryContext>(defaultState);

const CountryProvider = ({ children }: any) => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('NZ');

  const handleCountryChange = (value: SelectChangeEvent) => setSelectedCountry(value.target.value);

  useEffect(() => {
    getAllCountriesCode()
      .then((response) => {
        const list = response.data.map((country: ICountryResponse) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountriesList(list);
      })
      .catch(() => {});
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        selectedCountry,
        handleCountryChange,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountryProvider;
