import { render, screen } from '@testing-library/react';
import ButtonToMenu from '../ButtonToMenu';

// Mock the useMenuByLangName hook
jest.mock('@/utils/useMenuByLangName', () => ({
  useMenuByLangName: () => ({
    text: {
      stableTextHeader: [
        {
          text: 'Test Header',
          buttonText: 'Test Button',
        },
      ],
    },
  }),
}));

describe('ButtonToMenu', () => {
  it('renders the button with the correct text', () => {
    render(<ButtonToMenu />);

    const button = screen.getByRole('button', { name: /Test Button/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the header text', () => {
    render(<ButtonToMenu />);

    const headerText = screen.getByText(/Test Header/i);
    expect(headerText).toBeInTheDocument();
  });

  it('has a link to the menu page', () => {
    render(<ButtonToMenu />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/menu');
  });
});
