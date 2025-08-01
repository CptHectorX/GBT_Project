const openBtn = document.getElementById('openFormBtn');
const modal = document.getElementById('formModal');
const form = document.getElementById('ticketForm');
const cancelBtn = document.getElementById('cancelBtn');
const tableBody = document.getElementById('ticketTable').querySelector('tbody');

function addRow(ticket) {
  const row = document.createElement('tr');
  row.innerHTML =
    '<td>' + ticket.ticketnummer + '</td>' +
    '<td>' + ticket.kurztext + '</td>' +
    '<td>' + ticket.beschreibung + '</td>' +
    '<td>' + ticket.status + '</td>';
  tableBody.appendChild(row);
}

async function fetchTickets() {
  try {
    const res = await fetch('tickets');
    if (res.ok) {
      const tickets = await res.json();
      tableBody.innerHTML = '';
      tickets.forEach(addRow);
    }
  } catch (err) {
    console.error(err);
  }
}

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  form.reset();
});

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const ticket = {
    ticketnummer: document.getElementById('ticketnummer').value,
    kurztext: document.getElementById('kurztext').value,
    beschreibung: document.getElementById('beschreibung').value,
    status: document.getElementById('status').value
  };

  try {
    const res = await fetch('tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket)
    });
    if (res.ok) {
      addRow(ticket);
      form.reset();
      modal.classList.add('hidden');
    }
  } catch (err) {
    console.error(err);
  }
});

window.addEventListener('DOMContentLoaded', fetchTickets);