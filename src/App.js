import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');
  const [error, setError] = useState(''); // 🌟 Error message state

  const addBook = () => {
    if (newBook.trim() === '') {
      setError(t('error.emptyBook')); // 🌟 Show translated error
      return;
    }
    setBooks([...books, newBook]);
    setNewBook('');
    setError('');
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>

      <div className="input-group">
        <input
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          placeholder={t('addBook')}
        />
        <button onClick={addBook}>{t('addBook')}</button>
      </div>

      {/* 🌟 Show error if present */}
      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}

      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => deleteBook(index)}>{t('delete')}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;




