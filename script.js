document.getElementById('ticketForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var tableBody = document.getElementById('ticketTable').querySelector('tbody');

  var row = document.createElement('tr');

  var ticketnummer = document.getElementById('ticketnummer').value;
  var kurztext = document.getElementById('kurztext').value;
  var beschreibung = document.getElementById('beschreibung').value;
  var status = document.getElementById('status').value;

  row.innerHTML = '<td>' + ticketnummer + '</td>' +
                  '<td>' + kurztext + '</td>' +
                  '<td>' + beschreibung + '</td>' +
                  '<td>' + status + '</td>'; 

  tableBody.appendChild(row);

  this.reset();
});
