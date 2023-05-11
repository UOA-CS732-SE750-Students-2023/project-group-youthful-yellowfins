/**
 * Author: Ankita Mohata
 *
 * This is the context for getting the countries list to be available for filtering.
 * It has properties for getting the selected country and a function to update the country.
 * It also fetched the map topology of the world and selected country for mapcharts.
 *
 */

import React, { createContext, useState, useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import {
  customChinaData,
  getAllCountriesCode,
  getGeoJSON,
  getWorldGeoJSON,
} from '../services/dashboardService';
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

  // This function updates the selected category value
  const handleCountryChange = (value: SelectChangeEvent) => setSelectedCountry(value.target.value);

  useEffect(() => {
    // This fetches the countries code
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
    // This fetches the selected country map topology
    if (selectedCountry !== 'All') {
      if (selectedCountry === 'HK') {
        customChinaData()
          .then((response) => {
            setMapTopology(response.data);
          })
          .catch(() => {});
      } else {
        getGeoJSON(selectedCountry.toLowerCase())
          .then((response) => {
            setMapTopology(response.data);
          })
          .catch(() => {});
      }
    }
  }, [selectedCountry]);

  useEffect(() => {
    // This fetches the world map topology
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
