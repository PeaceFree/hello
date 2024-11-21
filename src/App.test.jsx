import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("Update Hello World", () => {
  render(<App />);
  const update = screen.getByRole("button");
  fireEvent.click(update);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
  });