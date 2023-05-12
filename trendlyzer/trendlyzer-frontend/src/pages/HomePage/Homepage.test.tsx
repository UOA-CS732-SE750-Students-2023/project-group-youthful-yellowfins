/**
 * Purpose: This files contain test cases for home page
 **/
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './index';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', () => {
  it('should render correctly', () => {
    const mockAuthContext = {
      auth: {
        isAuthenticated: true,
        loading: false,
      },
    };
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <HomePage />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Welcome, Trendlyzers')).toBeInTheDocument();
  });
});
