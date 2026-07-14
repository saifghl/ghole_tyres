import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Expert Tyre Repairs/i);
  expect(titleElement).toBeInTheDocument();
});
