import { Link, useNavigate, useOutletContext, useParams } from 'react-router';
import BookForm from '../components/BookForm.jsx';
export default function EditBookPage() {
  const { id } = useParams();
  const { books, updateBook } = useOutletContext();
  const navigate = useNavigate();
  const book = books.find(book => book.id === id);
  if (!book) return <div className="card"><h2>Bogen blev ikke fundet</h2><p>Du kan ikke redigere en bog, der ikke findes.</p><Link to="/books">Tilbage til bøger</Link></div>;
  function handleSave(values) {
    updateBook(id, values);
    navigate(`/books/${id}`);
  }
  return <><h2>Rediger bog</h2><BookForm key={book.id} initialValues={{ title: book.title, author: book.author }} onSubmit={handleSave} onCancel={() => navigate(`/books/${id}`)} submitLabel="Gem ændringer" /></>;
}
