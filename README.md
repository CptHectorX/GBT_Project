# Ticket System

This repository holds a single HTML page for simple ticket management. The page displays existing tickets in a table and provides a button that opens a form in a popup to add new ones. The popup also lets you set a due date, priority and assignee for each ticket. Click a row to see all details below the table.

## Opening the page

Open `index.html` in any modern web browser. Double-click the file or choose **File → Open** from your browser menu and select `index.html`.

## Saving tickets

Tickets entered in the popup are stored locally in your browser using
`localStorage`. Simply open `index.html` and any added tickets will remain the
next time you reload the page on the same browser.

You can still run the included Node server if you prefer to serve the files over
`http://localhost:3000`:

```bash
npm start
```

But it is no longer required for saving tickets.
