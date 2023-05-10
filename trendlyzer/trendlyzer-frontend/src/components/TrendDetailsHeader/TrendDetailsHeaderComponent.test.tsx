import { render } from '@testing-library/react';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import TrendDetailsHeaderComponent from './TrendDetailsHeaderComponent';

describe('TrendDetailsHeaderComponent', () => {
  test('renders component with trend details', () => {
    const trendDetails = {
      title: 'Test Trend',
      trafficCount: 1000,
      articleTitle: 'Test Article',
      image: {
        imageUrl: '',
        source: 'Test Source',
      },
    };

    const { getByText, getByAltText } = render(
      <TrendDetailsContext.Provider value={{ trendDetails }}>
        <TrendDetailsHeaderComponent />
      </TrendDetailsContext.Provider>,
    );
    expect(getByText(trendDetails.title)).toBeInTheDocument();
    expect(getByText(trendDetails.trafficCount.toString())).toBeInTheDocument();
    expect(getByText('Searches')).toBeInTheDocument();
    expect(getByText(trendDetails.title || trendDetails.articleTitle)).toBeInTheDocument();
  });
});
