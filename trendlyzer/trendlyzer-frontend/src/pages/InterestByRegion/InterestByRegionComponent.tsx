import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { headingsLabels } from '../../config/labels';
import { CountriesContext } from '../../context/CountriesContext';
import { ICountry } from '../../models/ContextModel';
import RegionDetailsComponent from '../../components/RegionDetails/RegionDetailsComponent';

const InterestByRegionComponent = () => {
  const { countriesList, selectedCountry, handleCountryChange } = useContext(CountriesContext);
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [countryList, setCountryList] = useState<any>([]);

  const handleKeywordChange = (value: any) => setSelectedKeyword(value.target.value);

  useEffect(() => {
    const list = [
      {
        name: 'All',
        code: 'All',
      },
      ...countriesList,
    ];
    setCountryList(list);
    return () => {
      if (selectedCountry === 'All') {
        handleCountryChange({ target: { value: 'NZ' } });
      }
    };
  }, []);

  return (
    <>
      <Box sx={{ p: 2, m: 2 }}>
        <Typography
          variant='h5'
          component='h3'
          gutterBottom
          sx={{ display: 'flex', color: '#560badff' }}
        >
          {headingsLabels.EXPLORE_TRENDS}
        </Typography>
      </Box>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <TextField
          id='outlined-basic'
          label={headingsLabels.SEARCH_KEYWORD}
          variant='outlined'
          sx={{ ml: 4, mr: 3, flex: 1 }}
          placeholder={headingsLabels.SEARCH_KEYWORD}
          inputProps={{ 'aria-label': headingsLabels.SEARCH_KEYWORD }}
          onChange={(value: any) => handleKeywordChange(value)}
          value={selectedKeyword}
        />
      </FormControl>
      <Box sx={{ ml: 3 }}>
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
            {countryList.map((country: ICountry) => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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