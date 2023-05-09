import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SentimentAnalysisComponent from './SentimentAnalysis';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import { getSentimentAnalysis } from '../../services/trendDetailsService';

jest.mock('../../services/trendDetailsService');

describe('SentimentAnalysisComponent', () => {
  const trendDetails = { title: 'test' };
  const setShowNavigation = jest.fn();
  const contextValue = { trendDetails, setShowNavigation };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without error', async () => {
    getSentimentAnalysis.mockResolvedValue({
      data: {
        result: {
          positiveSentiments: 10,
          neutralSentiments: 5,
          negativeSentiments: 2,
          postiveSentimentMagnitude: 50,
          negativeSentimentMagnitude: 20,
        },
      },
    });

    const { getByText } = render(
      <TrendDetailsContext.Provider value={contextValue}>
        <SentimentAnalysisComponent />
      </TrendDetailsContext.Provider>,
    );

    await waitFor(() => expect(getSentimentAnalysis).toHaveBeenCalled());
    expect(getByText('Sentiment Overview')).toBeInTheDocument();
    expect(getByText('Sentiment Magnitude')).toBeInTheDocument();
  });

  it('displays an error message when an error occurs while fetching sentiment data', async () => {
    const errorMessage = 'Error fetching sentiment analysis';
    getSentimentAnalysis.mockRejectedValue(new Error(errorMessage));

    const { getByText } = render(
      <TrendDetailsContext.Provider value={contextValue}>
        <SentimentAnalysisComponent />
      </TrendDetailsContext.Provider>,
    );

    await waitFor(() => expect(getSentimentAnalysis).toHaveBeenCalled());

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
