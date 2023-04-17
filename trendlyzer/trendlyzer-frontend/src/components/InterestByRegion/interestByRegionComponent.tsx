import React, { useContext, useState } from 'react';
import { FormControl, IconButton, TextField, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';

import { headingsLabels } from '../../config/labels';
import classes from './InterestByRegion.module.css';
import { CountriesContext } from '../../context/CountriesContext';
import { ICountry } from '../../models/ContextModel';
import RegionDetailsComponent from './Details/RegionDetailsComponent';

const InterestByRegionComponent = () => {
  const { countriesList, selectedCountry, handleCountryChange } = useContext(CountriesContext);
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());
  const [selectedKeyword, setSelectedKeyword] = useState('');

  const handleKeywordChange = (value: any) => setSelectedKeyword(value.target.value);

  return (
    <>
      <div className={classes.filtersBox}>
        <FormControl sx={{ display: 'inline-block', alignSelf: 'center' }}>
          <TextField
            id='outlined-basic'
            label={headingsLabels.SEARCH_KEYWORD}
            variant='outlined'
            sx={{ ml: 1, flex: 1 }}
            placeholder={headingsLabels.SEARCH_KEYWORD}
            inputProps={{ 'aria-label': headingsLabels.SEARCH_KEYWORD }}
            onChange={(value: any) => handleKeywordChange(value)}
            value={selectedKeyword}
            required
          />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <DatePicker
            label={headingsLabels.START_DATE}
            defaultValue={selectedStartDate}
            value={selectedStartDate}
            onChange={(newValue) => setSelectedStartDate(dayjs(newValue))}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <DatePicker
            label={headingsLabels.END_DATE}
            defaultValue={selectedEndDate}
            value={selectedEndDate}
            onChange={(newValue: any) => setSelectedEndDate(dayjs(newValue))}
          />
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
      <RegionDetailsComponent
        country={selectedCountry}
        searchKeyword={selectedKeyword}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
      />
    </>
  );
};

export default InterestByRegionComponent;
