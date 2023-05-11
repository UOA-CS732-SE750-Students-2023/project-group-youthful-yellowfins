/**
 * Purpose: This files contain test cases for real time component
 **/
import { render, screen } from '@testing-library/react';
import RealTimeTrendsComponent from './index';
import { CountriesContext } from '../../context/CountriesContext';
import { CategoryContext } from '../../context/CategoryContext';
import { BrowserRouter } from 'react-router-dom';

const mockCountries = [
  { code: 'NZ', name: 'New Zealand' },
  { code: 'AU', name: 'Australia' },
];

const mockCategories = [
  { code: 'business', name: 'Business' },
  { code: 'entertainment', name: 'Entertainment' },
];

const handleCountryChangeMock = jest.fn();
const handleCategoryChangeMock = jest.fn();

const renderComponent = (selectedCountry = 'All', selectedCategory = 'business') => {
  return render(
    <BrowserRouter>
      <CountriesContext.Provider
        value={{
          countriesList: mockCountries,
          selectedCountry,
          handleCountryChange: handleCountryChangeMock,
        }}
      >
        <CategoryContext.Provider
          value={{
            categoryList: mockCategories,
            selectedCategory,
            handleCategoryChange: handleCategoryChangeMock,
          }}
        >
          <RealTimeTrendsComponent />
        </CategoryContext.Provider>
      </CountriesContext.Provider>
    </BrowserRouter>,
  );
};

describe('RealTimeTrendsComponent', () => {
  test('renders with default values', () => {
    renderComponent();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByText('New Zealand')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
  });

  test('renders with selected values', () => {
    renderComponent('NZ', 'entertainment');
    expect(screen.getByText('New Zealand')).toBeInTheDocument();
    expect(screen.getByText('Entertainment')).toBeInTheDocument();
  });

});
