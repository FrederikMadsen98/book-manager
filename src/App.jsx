import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';

const STORAGE_KEY = 'book-manager-books';
const sampleBooks = [
  { id: 'b1', title: 'The Hobbit', author: 'J. R. R. Tolkien', isRead: false },
  { id: 'b2', title: '1984', author: 'George Orwell', isRead: true },
  { id: 'b3', title: 'Pride and Prejudice', author: 'Jane Austen', isRead: false },
];

function loadBooks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return sampleBooks;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || !parsed.every(book => book && typeof book.id === 'string' && typeof book.title === 'string' && typeof book.author === 'string' && typeof book.isRead === 'boolean')) {
      return sampleBooks;
    }
    return parsed;
  } catch {
    return sampleBooks;
  }
}

export default function App() {
  const [books, setBooks] = useState(loadBooks);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(books)); }
    catch (error) { console.error('Kunne ikke gemme bøger:', error); }
  }, [books]);

  //function addBook({ title, author }) {
  //  const id = crypto.randomUUID();
  //  setBooks(previous => [...previous, { id, title: title.trim(), author: author.trim(), isRead: false }]);
  //  return id;
  // }
  function addBook({ title, author }) {
    const numbers = books
      .map(book => Number(book.id.replace(/^b/, "")))
      .filter(Number.isInteger);
  
    const nextId = Math.max(0, ...numbers) + 1;
    const id = `b${nextId}`;
  
    const newBook = {
      id,
      title,
      author,
      isRead: false
    };
  
    setBooks(previous => [...previous, newBook]);
  
    return id;
  }
  function updateBook(id, { title, author }) {
    setBooks(previous => previous.map(book => book.id === id ? { ...book, title: title.trim(), author: author.trim() } : book));
  }
  function deleteBook(id) {
    setBooks(previous => previous.filter(book => book.id !== id));
  }
  function toggleRead(id) {
    setBooks(previous => previous.map(book => book.id === id ? { ...book, isRead: !book.isRead } : book));
  }

  return (
    <>
      <header className="site-header">
        <nav aria-label="Main navigation" className="nav container">
          <span className="brand">Book Manager</span>
          <NavLink to="/books" end className={({ isActive }) => isActive ? 'active' : ''}>Bøger</NavLink>
          <NavLink to="/books/create" className={({ isActive }) => isActive ? 'active' : ''}>Tilføj bog</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet context={{ books, addBook, updateBook, deleteBook, toggleRead }} />
      </main>
    </>
  );
}
