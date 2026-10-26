import { Link } from 'react-router';
export default function BookItem({ book, onDelete, onToggleRead }) {
  return (
    <li className="card book-item">
      <div>
        <h3><Link to={`/books/${book.id}`}>{book.title}</Link></h3>
        <p>Af {book.author}</p>
        <span className={`status ${book.isRead ? 'read' : ''}`}>{book.isRead ? 'Læst' : 'Ulæst'}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={() => onToggleRead(book.id)}>{book.isRead ? 'Markér ulæst' : 'Markér læst'}</button>
        <Link className="button" to={`/books/${book.id}/edit`}>Rediger</Link>
        <button type="button" className="danger" onClick={() => onDelete(book.id)}>Slet</button>
      </div>
    </li>
  );
}
