import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router';
import App from './App.jsx';
import BooksLayout from './layouts/BooksLayout.jsx';
import BooksPage from './pages/BooksPage.jsx';
import CreateBookPage from './pages/CreateBookPage.jsx';
import BookDetailsPage from './pages/BookDetailsPage.jsx';
import EditBookPage from './pages/EditBookPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/books" replace />} />
          <Route path="books" element={<BooksLayout />}>
            <Route index element={<BooksPage />} />
            <Route path="create" element={<CreateBookPage />} />
            <Route path=":id" element={<BookDetailsPage />} />
            <Route path=":id/edit" element={<EditBookPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
