const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const DATA_FILE = path.join(__dirname, 'tickets.json');

app.use(express.json());
app.use(express.static(__dirname));

function readTickets() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeTickets(tickets) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tickets, null, 2));
}

app.get('/tickets', (req, res) => {
  res.json(readTickets());
});

app.post('/tickets', (req, res) => {
  const tickets = readTickets();
  tickets.push(req.body);
  writeTickets(tickets);
  res.status(201).json({success: true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
