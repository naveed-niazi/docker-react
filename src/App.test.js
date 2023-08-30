import { render, screen } from '@testing-library/react';
import App from './App';



test('renders because it', () => {
  render(<App />);
  const linkElement = screen.getByText(/because it/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders because it', () => {
  render(<App />);
  const linkElement = screen.getByText(/because it/i);
  expect(linkElement).toBeInTheDocument();
});

