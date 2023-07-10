import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

/* ._id is from mongodb assigned, way of writing id */

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          {/* <Link to={`/show-book/${book._id}`}>{book.title}</Link>  */}
          <Link to={`/show-book/${book._id}`}>{book.originalUrl}</Link> {/* change to /show-link */}
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <p>{book.originalUrl}</p> {/* added */}
        <p>{book.shortUrl}</p> {/* added */}
        <button onClick={() => navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</button>
        <button>Custom Back Half</button>
      </div>
    </div>
  );
};

export default BookCard;
