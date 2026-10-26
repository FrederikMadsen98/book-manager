import BookItem from './BookItem.jsx';
export default function BookList({ books, onDelete, onToggleRead }) {
  if (books.length === 0) return <p className="card">Du har ingen bøger endnu. Tilføj din første bog via menuen.</p>;
  return <ul className="book-list">{books.map(book => <BookItem key={book.id} book={book} onDelete={onDelete} onToggleRead={onToggleRead} />)}</ul>;
}
