# Ticket System

This repository holds a single HTML page for simple ticket management. The page displays existing tickets in a table and provides a button that opens a form in a popup to add new ones.

## Opening the page

Open `index.html` in any modern web browser. Double-click the file or choose **File → Open** from your browser menu and select `index.html`.

## Running the server

Install dependencies with `npm install` and then start the server:

```bash
npm start
```

The page will be available at [http://localhost:3000](http://localhost:3000).

Ticket creation relies on this server. Submitted entries are stored in
`tickets.json` on the server side. If you open `index.html` directly from the
filesystem without the server running, tickets will not persist.