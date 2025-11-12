import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

// Mockataan fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('näyttää virheilmoituksen kun lähetys epäonnistuu', async () => {
  fetch.mockRejectedValueOnce(new Error('Verkkovirhe'));

  render(<ContactForm />);

  fireEvent.change(screen.getByLabelText(/nimi/i), { target: { value: 'Antti' } });
  fireEvent.change(screen.getByLabelText(/sähköposti/i), { target: { value: 'antti@example.com' } });
  fireEvent.change(screen.getByLabelText(/viesti/i), { target: { value: 'Hei!' } });

  fireEvent.click(screen.getByText(/lähetä/i));

  await waitFor(() => {
    expect(screen.getByText(/virhe lähetyksessä/i)).toBeInTheDocument();
  });
});