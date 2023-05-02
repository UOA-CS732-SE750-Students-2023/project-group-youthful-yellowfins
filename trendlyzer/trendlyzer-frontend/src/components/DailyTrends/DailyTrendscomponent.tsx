import React, { useState, useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { headingsLabels } from '../../config/labels';
import DailyTrendsDetailsComponent from './Details/DailyTrendsDetailsComponent';
import { CountriesContext } from '../../context/CountriesContext';
import { ICountry } from '../../models/ContextModel';

const DailyTrendsComponent = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { countriesList, selectedCountry, handleCountryChange } = useContext(CountriesContext);

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='country-label'>{headingsLabels.COUNTRY}</InputLabel>
          <Select
            labelId='country-label'
            id='country-select'
            value={countriesList.length ? selectedCountry : ''}
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
          <DatePicker
            defaultValue={dayjs('2022/04/17')}
            value={selectedDate}
            label={headingsLabels.DATE}
            onChange={(newValue) => setSelectedDate(dayjs(newValue))}
          />
        </FormControl>
      </div>
      <DailyTrendsDetailsComponent country={selectedCountry} date={selectedDate} />
    </>
  );
};

export default DailyTrendsComponent;
