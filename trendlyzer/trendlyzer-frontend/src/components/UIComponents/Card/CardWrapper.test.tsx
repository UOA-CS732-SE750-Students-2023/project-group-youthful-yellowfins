import { render, screen } from '@testing-library/react';
import CardWrapperComponent from './CardWrapper';

describe('CardWrapperComponent', () => {
  const mockTrendsList = {
    id: '1',
    title: 'Test title',
    image: { imageUrl: 'test-url', source: 'test-source' },
    articles: [{ title: 'Test article', url: 'test-article-url', source: 'test-article-source' }],
    handleMoreDetails: jest.fn(),
  };

  test('renders the component with the correct props', () => {
    render(<CardWrapperComponent {...mockTrendsList} />);

    expect(screen.getByText(mockTrendsList.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockTrendsList.image.source)).toHaveAttribute('src', mockTrendsList.image.imageUrl);
    expect(screen.getByText(mockTrendsList.articles[0].title)).toBeInTheDocument();
    expect(screen.getByText(/More Details/i)).toBeInTheDocument();
  });

  test('calls the handleMoreDetails function when the button is clicked', () => {
    render(<CardWrapperComponent {...mockTrendsList} />);

    const moreDetailsButton = screen.getByText(/More Details/i);
    moreDetailsButton.click();

    expect(mockTrendsList.handleMoreDetails).toHaveBeenCalled();
  });
});
