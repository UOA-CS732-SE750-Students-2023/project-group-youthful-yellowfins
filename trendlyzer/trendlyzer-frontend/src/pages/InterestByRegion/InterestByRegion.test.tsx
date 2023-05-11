/**
 * Purpose: This files contain test cases for interest by region page
 **/
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InterestByRegionComponent from './InterestByRegionComponent';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter } from 'react-router-dom';

describe('InterestByRegionComponent', () => {
  test('renders the search keyword input field', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InterestByRegionComponent />
        </LocalizationProvider>
      </BrowserRouter>,
    );
    const searchKeywordInput = screen.getByLabelText('Search trend keyword');
    expect(searchKeywordInput).toBeInTheDocument();
  });

  test('updates the search keyword when the user types', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InterestByRegionComponent />
        </LocalizationProvider>
      </BrowserRouter>,
    );
    const searchKeywordInput = getByLabelText('Search trend keyword');
    fireEvent.change(searchKeywordInput, { target: { value: 'react' } });
    expect(searchKeywordInput).toHaveValue('react');
  });
});
