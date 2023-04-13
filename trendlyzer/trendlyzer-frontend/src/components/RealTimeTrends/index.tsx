import React, { useEffect, useState } from 'react';
import { FormControl, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import { headingsLabels } from '../../config/labels';
import { getAllCountriesCode } from '../../services/dashboardService';
import { ICountry, ICountryResponse } from '../../models/common';

const RealTimeTrendsComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [countriesList, setCountriesList] = useState([]);

  const handleCountryChange = () => {
    setSelectedCountry('NZ');
  };

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
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='country-label'>{headingsLabels.COUNTRY}</InputLabel>
        <Select
          labelId='country-label'
          id='country-select'
          value={selectedCountry}
          label={headingsLabels.COUNTRY}
          onChange={handleCountryChange}
        >
          {countriesList.map((country: ICountry) => (
            <MenuItem key={country.code} value={country.code}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormControl sx={{ display: 'inline-block', alignSelf: 'center' }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='Category'
            inputProps={{ 'aria-label': 'category' }}
          />
        </FormControl>
      </FormControl>
    </>
  );
};

export default RealTimeTrendsComponent;
