import { useNavigate, useOutletContext } from 'react-router';
import BookForm from '../components/BookForm.jsx';
export default function CreateBookPage() {
  const { addBook } = useOutletContext();
  const navigate = useNavigate();
  function handleCreate(values) {
    const id = addBook(values);
    navigate(`/books/${id}`);
  }
  return <><h2>Tilføj bog</h2><BookForm onSubmit={handleCreate} onCancel={() => navigate('/books')} submitLabel="Opret bog" /></>;
}
