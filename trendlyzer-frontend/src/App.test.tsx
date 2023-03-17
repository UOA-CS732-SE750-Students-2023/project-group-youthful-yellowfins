import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Trendlyzer text', () => {
  render(<App />);
  const textElement = screen.getByText(/Trendlyzer/i);
  expect(textElement).toBeInTheDocument();
});
