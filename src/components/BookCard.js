import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <div>
        <h2>
          <Link to={`/show-link/${book._id}`}>{book.originalUrl}</Link>
        </h2>
        <p>{book.originalUrl}</p>
        <p>{book.shortUrl}</p>
        <button onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</button>
        <button>Custom back half</button>
      </div>
    </div>
  );
};

export default BookCard;

/* ._id is from mongodb assigned, way of writing id */
