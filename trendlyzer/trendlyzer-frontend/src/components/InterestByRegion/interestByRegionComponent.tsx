import React, { useEffect, useState } from 'react';
import { FormControl, IconButton, InputBase, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';

import { headingsLabels } from '../../config/labels';
import { getAllCountriesCode } from '../../services/dashboardService';
import { ICountry, ICountryResponse } from '../../models/common';
import classes from './interestByRegion.module.css';

const InterestByRegionComponent = () => {
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
    <div className={classes.filtersBox}>
      <FormControl sx={{ display: 'inline-block', alignSelf: 'center' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search keywords'
          inputProps={{ 'aria-label': 'search keywords' }}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <DatePicker label={headingsLabels.START_DATE} />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <DatePicker label={headingsLabels.END_DATE} />
      </FormControl>
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
    </div>
  );
};

export default InterestByRegionComponent;
