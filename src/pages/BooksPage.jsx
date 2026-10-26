import { useOutletContext } from 'react-router';
import BookList from '../components/BookList.jsx';
export default function BooksPage() {
  const { books, deleteBook, toggleRead } = useOutletContext();
  return <><h2>Alle bøger ({books.length})</h2><BookList books={books} onDelete={deleteBook} onToggleRead={toggleRead} /></>;
}
