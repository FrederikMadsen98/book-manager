import { Link, useOutletContext, useParams } from 'react-router';
export default function BookDetailsPage() {
  const { id } = useParams();
  const { books, toggleRead } = useOutletContext();
  const book = books.find(book => book.id === id);
  if (!book) return <div className="card"><h2>Bogen blev ikke fundet</h2><p>Der findes ingen bog med dette ID.</p><Link to="/books">Tilbage til bøger</Link></div>;
  return <article className="card"><h2>{book.title}</h2><p>Forfatter: {book.author}</p><p>Status: <strong>{book.isRead ? 'Læst' : 'Ulæst'}</strong></p><div className="actions"><button onClick={() => toggleRead(id)}>{book.isRead ? 'Markér ulæst' : 'Markér læst'}</button><Link className="button" to={`/books/${id}/edit`}>Rediger</Link><Link className="button" to="/books">Tilbage til bøger</Link></div></article>;
}
