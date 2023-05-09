import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TweetSentimentAnalysisComponent from './TweetSentimentAnalysis';

describe('TweetSentimentAnalysisComponent', () => {
  it('should render correctly', () => {
    const {getByText} = render(<TweetSentimentAnalysisComponent />);
    expect(getByText('Sentiment Analysis')).toBeInTheDocument();
    expect(screen.getByLabelText('Search trend keyword')).toBeInTheDocument();
  });
});
