import React, { createContext, useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { getAllCountriesCode, getGeoJSON, getWorldGeoJSON } from '../services/dashboardService';
import { ICountryResponse } from '../models/common';
import { ICountryContext } from '../models/ContextModel';

const defaultState = {
  countriesList: [],
  selectedCountry: 'NZ',
  handleCountryChange: () => {},
  mapTopology: {},
  worldMapTopology: {},
};

export const CountriesContext = createContext<ICountryContext>(defaultState);

const CountryProvider = ({ children }: any) => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('NZ');
  const [mapTopology, setMapTopology] = useState({});
  const [worldMapTopology, setWorldMapTopology] = useState({});

  const handleCountryChange = (value: SelectChangeEvent) => setSelectedCountry(value.target.value);

  useEffect(() => {
    getAllCountriesCode()
      .then((response) => {
        const list = response.data.result.map((country: ICountryResponse) => ({
          code: country.cca2,
          name: country.name,
        }));
        list.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
        setCountriesList(list);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    getGeoJSON(selectedCountry.toLowerCase())
      .then((response) => {
        setMapTopology(response.data);
      })
      .catch(() => {});
  }, [selectedCountry]);

  useEffect(() => {
    getWorldGeoJSON()
      .then((response) => {
        setWorldMapTopology(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        selectedCountry,
        handleCountryChange,
        mapTopology,
        worldMapTopology,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountryProvider;
