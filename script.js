const openBtn = document.getElementById('openFormBtn');
const modal = document.getElementById('formModal');
const form = document.getElementById('ticketForm');
const cancelBtn = document.getElementById('cancelBtn');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  form.reset();
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const tableBody = document.getElementById('ticketTable').querySelector('tbody');

  const row = document.createElement('tr');

  const ticketnummer = document.getElementById('ticketnummer').value;
  const kurztext = document.getElementById('kurztext').value;
  const beschreibung = document.getElementById('beschreibung').value;
  const status = document.getElementById('status').value;

  row.innerHTML =
    '<td>' + ticketnummer + '</td>' +
    '<td>' + kurztext + '</td>' +
    '<td>' + beschreibung + '</td>' +
    '<td>' + status + '</td>';

  tableBody.appendChild(row);

  form.reset();
  modal.classList.add('hidden');
});
