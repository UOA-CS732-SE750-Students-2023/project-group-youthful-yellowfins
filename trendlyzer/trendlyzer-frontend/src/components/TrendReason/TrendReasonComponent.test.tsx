import React from 'react';
import { render } from '@testing-library/react';
import TrendReasonComponent from './TrendReasonComponent';

describe('TrendReasonComponent', () => {
  it('renders the trend background and reason', () => {
    const trendBackground = 'Test Background';
    const trendReason = 'Test Reason';
    const { getByText } = render(
      <TrendReasonComponent trendBackground={trendBackground} trendReason={trendReason} />,
    );
    expect(getByText(trendBackground)).toBeInTheDocument();
    expect(getByText('Background information about this trend')).toBeInTheDocument();
    expect(getByText(trendReason)).toBeInTheDocument();
    expect(getByText('Why is it trending?')).toBeInTheDocument();
  });
});
