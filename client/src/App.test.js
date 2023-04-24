import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "It s a testing app for checking AWS deployment process" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/It's a testing app for checking AWS deployment process/i);
  expect(linkElement).toBeInTheDocument();
});
