import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import CopyToClipboard from "./CopyToClipboard";

function ShowBookDetails(props) {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/show/${id}`)
       // .get(`http://localhost:8082/api/books/${id}`) -> so no conflict with test.js (the localhost:3000/:urlId to redirect
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  /* const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  }; */

  const BookItem = (
    <div className="h-100">
      <table className='table border-0'>
        <tbody>
          <tr className="border-0">
            <td className="fw-bold border-0">Original url: </td>
            <td className="border-0">{book.originalUrl}</td>
          </tr>

         <tr className="border-0">
            <td className="fw-bold border-0">short url: </td>
            {/* <td>{book.shortUrl}</td> */}
            <CopyToClipboard copyText={book.shortUrl} ></CopyToClipboard>
          </tr>

            <tr className="border-0">
            {/* delete below when finish */}
            <td className="fw-bold border-0">url id:</td>
            <td className="border-0">{book.urlId}</td>
          </tr>

        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails h-100'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-md-8 m-auto align-items-center'>
            <h1 className='display-4 text-center'>My link</h1>
            {BookItem}
            </div>
          {/* <div className='col-md-6 m-auto'>
             <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(book._id);
              }}
            >
              Delete Book
            </button>
          </div> */}
          <div className='col-md-6 mx-auto text-center'>
            <Link
              to={`/edit-book/${book._id}`}
              className='btn btn-outline-secondary btn-block mx-auto '
            >
            Custom back half
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;
