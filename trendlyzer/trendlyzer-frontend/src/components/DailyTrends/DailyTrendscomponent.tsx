import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { headingsLabels } from '../../config/labels';
import { getAllCountriesCode } from '../../services/dashboardService';
import { ICountry, ICountryResponse } from '../../models/common';
import DailyTrendsDetailsComponent from './Details/DailyTrendsDetailsComponent';
import dayjs from 'dayjs';

const DailyTrendsComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState('FR');
  const [countriesList, setCountriesList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

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
      <div>
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
          <DatePicker
            defaultValue={dayjs('2022/04/17')}
            value={selectedDate}
            onChange={(newValue) => {
              console.log('newValue', newValue);
              setSelectedDate(dayjs(newValue));
            }}
          />
        </FormControl>
      </div>
      <DailyTrendsDetailsComponent country={selectedCountry} date={selectedDate} />
      {/* <DailyTrendsDetailsComponent />

      <DailyTrendsDetailsComponent /> */}
    </>
  );
};

export default DailyTrendsComponent;
