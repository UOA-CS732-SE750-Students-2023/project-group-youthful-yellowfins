/**
 * Purpose: This files contain test cases for sentimental analysis page
 **/

import { render, screen } from '@testing-library/react';
import SentimentAnalysisComponent from './SentimentAnalysis';

describe('SentimentAnalysisComponent', () => {
  const sentimentData = {
    error: null,
    loading: false,
    showError: false,
    tweets: {
      positiveSentiments: 20,
      negativeSentiments: 5,
      neutralSentiments: 10,
      totalTweetsAnalysed: 35,
      postiveSentimentMagnitude: 8,
      negativeSentimentMagnitude: 3,
      positiveTweets: ['Tweet 1', 'Tweet 2'],
      neutralTweets: ['Tweet 3', 'Tweet 4'],
      negativeTweets: ['Tweet 5', 'Tweet 6'],
    },
  };
  const setSentimentData = jest.fn();
  
  it('renders sentiment analysis screen', () => {
    const {getByText} = render(<SentimentAnalysisComponent sentimentData={sentimentData} setSentimentData={setSentimentData} />);
    expect(getByText(/Sentiment Overview/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sentiment Overview/i)).toBeInTheDocument();
    expect(getByText('Sentiment Magnitude')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Negative Tweets/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Neutral Tweets/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Positive Tweets/i })).toBeTruthy();
  });

  it('renders error alert when error is present', () => {
    render(<SentimentAnalysisComponent sentimentData={{ ...sentimentData, error: 'Error message', showError: true }} setSentimentData={setSentimentData} />);
    expect(screen.getByRole('alert')).toHaveTextContent('Error message');
  });

  it('renders sentiment analysis components when data is present', () => {
    const {getByText} = render(<SentimentAnalysisComponent sentimentData={sentimentData} setSentimentData={setSentimentData} />);
    expect(getByText(/Tweet 1/i)).toBeInTheDocument();
    expect(getByText(/Tweet 2/i)).toBeInTheDocument();
    expect(getByText(/Tweet 3/i)).toBeInTheDocument();
  });
});
