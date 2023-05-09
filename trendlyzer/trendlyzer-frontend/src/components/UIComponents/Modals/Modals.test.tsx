import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalComponent from './index';

describe('ModalComponent', () => {
  test('renders modal with data', () => {
    const data = [
      { title: 'Title 1', description: 'Description 1' },
      { title: 'Title 2', description: 'Description 2' },
    ];
    const isModalOpen = true;
    render(<ModalComponent data={data} isModalOpen={isModalOpen} />);

    // assert that data is rendered
    const titleElements = screen.getAllByRole('heading', { level: 5 });
    expect(titleElements).toHaveLength(2);
    expect(titleElements[0]).toHaveTextContent('Title 1');
    expect(titleElements[1]).toHaveTextContent('Title 2');

    const descriptionElement = screen.getByText('Description 1');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveAttribute('id', 'modal-modal-description-0');
  });
});
