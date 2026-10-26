import { Outlet, useOutletContext } from 'react-router';
export default function BooksLayout() {
  const bookContext = useOutletContext();
  return <section><h1>Min bogsamling</h1><Outlet context={bookContext} /></section>;
}
