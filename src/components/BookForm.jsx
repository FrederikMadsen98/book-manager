import { useState } from 'react';
export default function BookForm({ initialValues = { title: '', author: '' }, onSubmit, onCancel, submitLabel = 'Gem bog' }) {
  const [title, setTitle] = useState(initialValues.title);
  const [author, setAuthor] = useState(initialValues.author);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = 'Du skal skrive en titel.';
    if (!author.trim()) nextErrors.author = 'Du skal skrive en forfatter.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    onSubmit({ title: title.trim(), author: author.trim() });
  }

  return (
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="title">Titel</label>
      <input id="title" value={title} onChange={e => setTitle(e.target.value)} aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? 'title-error' : undefined} />
      {errors.title && <p className="error" id="title-error" role="alert">{errors.title}</p>}
      <label htmlFor="author">Forfatter</label>
      <input id="author" value={author} onChange={e => setAuthor(e.target.value)} aria-invalid={Boolean(errors.author)} aria-describedby={errors.author ? 'author-error' : undefined} />
      {errors.author && <p className="error" id="author-error" role="alert">{errors.author}</p>}
      <div className="actions"><button type="submit" className="primary">{submitLabel}</button><button type="button" onClick={onCancel}>Annuller</button></div>
    </form>
  );
}
