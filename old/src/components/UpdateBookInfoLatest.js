import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

import ErrorComp from './ErrorComp'

//  const [errorText, setErrorText] = useState('')
// const [errorMessage, setErrorMessage] = useState('')

  /* useEffect(() => {
    setErrorText(data)
  }, [error]) */

  /* useEffect((text) => {
    setErrorMessage(text)
  }, [error]); */

  // setErrorMessage({err.response.data.msg})
  // setError({true)

function UpdateBookInfo(props) {
  const [book, setBook] = useState({
    originalUrl: '',
    shortUrl: '',
    urlId: '',
  });

  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: ''
  })

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook({
          originalUrl: res.data.originalUrl,
          shortUrl: res.data.shortUrl,
          urlId: res.data.urlId
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      originalUrl: book.originalUrl,
      shortUrl: book.shortUrl,
      urlId: book.urlId
    };

    axios
      .put(`http://localhost:8082/api/books/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log(err.response.data.msg) // err.response.data. console.log(err) also works
        console.log('Error in UpdateBookInfo!');
        setError( {
          errorStatus: true,
          errorMessage: err.response.data.msg
        });
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            {/* correct way? */}
            <Link to={`/show-book/${id}`} className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
            {/* <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link> */}
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            {/* <p className='lead text-center'>Update Book's Info</p> */}
          </div>
        </div>

        <div className='col-md-8 m-auto'>
        { error.errorStatus ? <ErrorComp error={error.errorMessage}/> : null }
          <form noValidate onSubmit={onSubmit}>

{/*
          <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Publisher of the Book'
                name='publisher'
                className='form-control'
                value={book.publisher}
                onChange={onChange}
              />
            </div>
            <br />
*/}
            <div className='form-group'>
              <label htmlFor='originalUrl'>http://localhost:3002/</label>
              <input
                type='text' //url
                placeholder={book.urlId}
                // placeholder={book.shortUrl.split("/").pop()}
                // placeholder='Long url'
                // name='originalUrl'
                // name='shortUrl'
                name='urlId'
                className='form-control'
                // value={book.shortUrl}
                value={book.urlId}
                // value={book.originalUrl}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBookInfo;
