import { Link } from 'react-router';
export default function NotFoundPage() {
  return <section className="card"><h1>404 – Siden findes ikke</h1><p>Den adresse, du har åbnet, findes ikke.</p><Link to="/books">Tilbage til bøger</Link></section>;
}
