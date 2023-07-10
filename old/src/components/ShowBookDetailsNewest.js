import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import CopyToClipboard from "./CopyToClipboard";

function ShowBookDetails(props) {
  const [book, setBook] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/show/${id}`)
       // .get(`http://localhost:8082/api/books/${id}`) // so no conflict with test.js (the localhost:3000/:urlId to redirect
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
    <div>
      <table className='table table-hover borderless'>
        <tbody>
          <tr>
            <td>Original url: </td>
            <td>{book.originalUrl}</td>
          </tr>

          <tr>
            <td>short url: </td>
            {/* <td>{book.shortUrl}</td> */}
            <CopyToClipboard copyText={book.shortUrl} ></CopyToClipboard>
            {/* <button onClick={() =>  navigator.clipboard.writeText(book.shortUrl)} > Copy </button> */}
          </tr>

            <tr>
            {/* delete below when finish */}
            <td>url id:</td>
            <td>{book.urlId}</td>
          </tr>

        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>My link</h1>
            {/* <p className='lead text-center'>View Book's Info</p> */}
            {/* <hr /> <br /> */}
          </div>
          <div className='col-md-10 m-auto'>{BookItem}</div>
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
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-book/${book._id}`}
              className='btn btn-outline-info btn-lg btn-block'
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
