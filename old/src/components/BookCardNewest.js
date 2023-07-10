import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>
          <Link to={`/show-link/${book._id}`}>{book.originalUrl}</Link>
           {/* /show-book */}
        </h2>
        {/* <h3>{book.author}</h3>
        <p>{book.description}</p> */}
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
