const openBtn = document.getElementById('openFormBtn');
const modal = document.getElementById('formModal');
const form = document.getElementById('ticketForm');
const cancelBtn = document.getElementById('cancelBtn');
const tableBody = document.getElementById('ticketTable').querySelector('tbody');
const detailPanel = document.getElementById('detailPanel');
const detailNummer = document.getElementById('detailNummer');
const detailKurztext = document.getElementById('detailKurztext');
const detailBeschreibung = document.getElementById('detailBeschreibung');
const detailStatus = document.getElementById('detailStatus');
const detailDuedate = document.getElementById('detailDuedate');
const detailPriority = document.getElementById('detailPriority');
const detailAssignee = document.getElementById('detailAssignee');
let selectedRow = null;


function addRow(ticket) {
  const row = document.createElement('tr');
  row.innerHTML =
    '<td>' + ticket.ticketnummer + '</td>' +
    '<td>' + ticket.kurztext + '</td>' +
    '<td>' + ticket.beschreibung + '</td>' +
    '<td>' + ticket.status + '</td>';
  row.addEventListener('click', () => {
    if (selectedRow) selectedRow.classList.remove('selected');
    row.classList.add('selected');
    selectedRow = row;
    showDetails(ticket);
  });

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

function showDetails(ticket) {
  detailNummer.textContent = ticket.ticketnummer;
  detailKurztext.textContent = ticket.kurztext;
  detailBeschreibung.textContent = ticket.beschreibung;
  detailStatus.textContent = ticket.status;
  detailDuedate.textContent = ticket.duedate;
  detailPriority.textContent = ticket.priority;
  detailAssignee.textContent = ticket.assignee;
  detailPanel.classList.remove('hidden');
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
    duedate: document.getElementById('duedate').value,
    priority: document.getElementById('priority').value,
    assignee: document.getElementById('assignee').value,

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
