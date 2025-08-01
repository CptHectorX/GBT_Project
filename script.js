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

function loadTickets() {
  const data = localStorage.getItem('tickets');
  try {
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Could not parse saved tickets:', err);
    return [];
  }
}

function saveTickets(tickets) {
  localStorage.setItem('tickets', JSON.stringify(tickets));
}

function refreshTable() {
  tableBody.innerHTML = '';
  loadTickets().forEach(addRow);
}

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  form.reset();
});

form.addEventListener('submit', function (event) {

  event.preventDefault();
  const ticket = {
    ticketnummer: document.getElementById('ticketnummer').value,
    kurztext: document.getElementById('kurztext').value,
    beschreibung: document.getElementById('beschreibung').value,
    status: document.getElementById('status').value,
  };

  const tickets = loadTickets();
  tickets.push(ticket);
  saveTickets(tickets);

  // Immediately add row so the interface feels responsive
  addRow(ticket);
  form.reset();
  modal.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', refreshTable);

