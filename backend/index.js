const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Vastaanotettu:', name, email, message);
  res.json({ message: 'Kiitos viestistäsi!' });
  if (!name || !email || !message) {
  return res.status(400).json({ message: 'Kaikki kentät ovat pakollisia' });
}
});

app.listen(5000, () => console.log('Backend käynnissä portissa 5000'));