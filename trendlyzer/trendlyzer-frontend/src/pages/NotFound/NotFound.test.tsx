/**
 * Purpose: This files contains test cases for not found page
 **/
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('should render correctly', () => {
    const {getByText} = render(<BrowserRouter><NotFound/></BrowserRouter>);
    expect(getByText('404 Not Found')).toBeInTheDocument();
    expect(getByText('The page you requested is on a coffee break. We`ll let you know when it`s back.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to homepage' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '/contact');
  });
});
