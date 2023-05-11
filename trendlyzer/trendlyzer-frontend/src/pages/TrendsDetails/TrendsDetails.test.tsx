/**
 * Purpose: This files contain test cases for trends detail page
 **/
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CountriesContext } from '../../context/CountriesContext';
import AuthProvider from '../../context/AuthContext';
import { CategoryContext } from '../../context/CategoryContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TrendsDetails from './TrendsDetails';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import TrendsDetailsHeaderComponent from '../../components/TrendDetailsHeader/TrendDetailsHeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import { mockCategoryContextData, mockCountryContextData } from '../../config/mockDataTesting';

describe('Trend Detail page', () => {
  const trendDetailsMock = {
    title: 'Test Title',
    articleTitle: 'Test Article Title',
    trafficCount: 100,
    image: {
      imageUrl: 'https://example.com/image.jpg',
      source: 'Test Source',
    },
  };
  const mockTrendContextData = {
    trendDetails: trendDetailsMock,
    handleTrendDetails: () => {},
    showNavigation: false,
    setShowNavigation: () => {},
  };

  const { getByText } = render(
    <AuthProvider>
      <CountriesContext.Provider value={mockCountryContextData}>
        <CategoryContext.Provider value={mockCategoryContextData}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TrendDetailsContext.Provider value={mockTrendContextData}>
              <BrowserRouter>
                <TrendsDetails />
                <TrendsDetailsHeaderComponent />
              </BrowserRouter>
            </TrendDetailsContext.Provider>
          </LocalizationProvider>
        </CategoryContext.Provider>
      </CountriesContext.Provider>
    </AuthProvider>,
  );

  it('renders trend detail page', async () => {
    expect(getByText(/Trend Analysis/i)).toBeTruthy();
    expect(getByText(/Sentiment Analysis/i)).toBeTruthy();
    fireEvent.click(screen.getByText('Trend Analysis'));
    fireEvent.click(screen.getByText('Sentiment Analysis'));
  });

  it('fetches data from chatgpt api and updates state', async () => {
    render(
      <TrendDetailsContext.Provider value={mockTrendContextData}>
        <TrendsDetails />
      </TrendDetailsContext.Provider>,
    );
    expect(getByText('Test Title')).toBeInTheDocument();
  });
});
