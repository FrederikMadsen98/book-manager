# Book Manager – React + Node.js + Vite

## Kom i gang

Installer en Node.js-version understøttet af Vite (Node.js 20.19+ eller 22.12+ for Vite 6). Kør:

```bash
npm install
npm run dev
```

Åbn adressen, som Vite viser (typisk http://localhost:5173).

## Projektstruktur

- `src/main.jsx`: React Router 7 i deklarativ tilstand med nested routes.
- `src/App.jsx`: Eneste kilde til books-state, CRUD-funktioner og localStorage.
- `src/layouts/BooksLayout.jsx`: Modtager og videresender Outlet-context.
- `src/pages/`: Siderne læser state via useOutletContext.
- `src/components/`: Genanvendelige komponenter modtager props.

## Routes

- `/` → redirect til `/books`
- `/books` → liste
- `/books/create` → opret
- `/books/:id` → detaljer
- `/books/:id/edit` → rediger
- `*` → 404

## Test af acceptkriterier

1. Besøg alle routes; test også `/books/ukendt` og `/ikke-en-side`.
2. Kontrollér, at navigationen vises på alle sider.
3. Kontrollér, at App og BooksLayout begge indeholder Outlet.
4. Kontrollér, at BooksLayout videresender `context={bookContext}`.
5. Opret, vis, rediger, slet og skift læsestatus på bøger.
6. Kontrollér, at opret/gem går til detaljesiden.
7. Rediger input og vælg Annuller; kontrollér, at bogen er uændret.
8. Indsend tom titel eller forfatter og kontrollér fejlbeskeder.
9. Genindlæs siden; kontrollér at bøgerne bevares.
10. Slet alle bøger, genindlæs og kontrollér, at listen stadig er tom.
11. Brug browserens Tilbage/Frem-knapper.
12. Test både mobilbredde og desktopbredde.

## Læringsmål / steps

1. Projekt og bogmodel: `package.json`, `App.jsx`.
2. Nested routes: `main.jsx`.
3. Permanent navigation: `App.jsx`.
4. Outlet context: `App.jsx`, `BooksLayout.jsx`.
5. Bogliste: `BooksPage`, `BookList`, `BookItem`.
6. Bogdetaljer: `BookDetailsPage`.
7. Oprettelse: `CreateBookPage`, `BookForm`.
8. Redigering: `EditBookPage`, `BookForm`.
9. localStorage og fejl: `App.jsx`, `NotFoundPage`.

## Teknologi

Node.js bruges til Vite's udviklingsserver. Der kræves ingen backend eller database. Data gemmes i browserens localStorage.
