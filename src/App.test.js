import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderöi yhteydenottolomakkeen otsikon', () => {
  render(<App />);
  expect(screen.getByText(/yhteydenottolomake/i)).toBeInTheDocument();
});