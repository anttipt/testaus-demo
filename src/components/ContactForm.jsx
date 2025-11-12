import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
  console.error('Virhe:', err);
  setResponse('Virhe lähetyksessä');
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nimi:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Sähköposti:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Viesti:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Lähetä</button>
      {response && <p>{response}</p>}
    </form>
  );
}