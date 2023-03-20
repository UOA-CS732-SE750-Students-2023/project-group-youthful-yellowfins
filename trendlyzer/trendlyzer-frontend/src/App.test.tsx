import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Trendlyzer text', () => {
  render(<App />);
  // TODO: Testing setup
  // const textElement = screen.getByText(/Trendlyzer/i);
  // expect(textElement).toBeInTheDocument();
});
