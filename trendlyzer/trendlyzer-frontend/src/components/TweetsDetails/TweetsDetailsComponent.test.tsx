/**
 * Purpose: This files contain test cases for tweet details component
 **/
import { render, screen } from '@testing-library/react';
import TweetDetailsComponent from './TweetsDetailsComponent';

describe('TweetDetailsComponent', () => {
  const title = 'Sample title';
  const tweets = ['Sample tweet 1', 'Sample tweet 2'];

  test('renders the title', () => {
    render(<TweetDetailsComponent title={title} tweets={tweets} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the tweets when they are present', () => {
    render(<TweetDetailsComponent title={title} tweets={tweets} />);
    expect(screen.getByText('Sample tweet 1')).toBeInTheDocument();
    expect(screen.getByText('Sample tweet 2')).toBeInTheDocument();
  });

  test('renders a message when no tweets are present', () => {
    render(<TweetDetailsComponent title={title} tweets={[]} />);
    const messageElement = screen.getByText('No tweets found.');
    expect(messageElement).toBeInTheDocument();
  });
});
