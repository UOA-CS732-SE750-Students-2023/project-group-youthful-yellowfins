import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { headingsLabels } from '../../config/labels';
import { CountriesContext } from '../../context/CountriesContext';
import { CategoryContext } from '../../context/CategoryContext';
import { ICategory, ICountry } from '../../models/ContextModel';
import RealTimeDetailsComponent from './Details/RealTimeDetailsComponent';

const RealTimeTrendsComponent = () => {
  const { countriesList, selectedCountry, handleCountryChange } = useContext(CountriesContext);
  const { categoryList, selectedCategory, handleCategoryChange } = useContext(CategoryContext);

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='country-label'>{headingsLabels.COUNTRY}</InputLabel>
          <Select
            labelId='country-label'
            id='country-select'
            value={selectedCountry === 'All' ? 'NZ' : selectedCountry}
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
          <InputLabel id='category-label'>{headingsLabels.CATEGORY}</InputLabel>
          <Select
            labelId='category-label'
            id='category-select'
            value={selectedCategory}
            label={headingsLabels.CATEGORY}
            onChange={handleCategoryChange}
          >
            {categoryList.map((category: ICategory) => (
              <MenuItem key={category.code} value={category.code}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <RealTimeDetailsComponent
        country={selectedCountry === 'All' ? 'NZ' : selectedCountry}
        category={selectedCategory}
      />
    </>
  );
};

export default RealTimeTrendsComponent;
