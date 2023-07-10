import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import ErrorComp from './ErrorComp'
// import validator from 'validator'

const CreateBook = (props) => {
  // console.log("props: " + props.originalUrl)
  // Define the state with useState hook
  const navigate = useNavigate();
  const [book, setBook] = useState({
    originalUrl: '',
    shortUrl: '', // added. need?
    urlId: '' // added. need?
  });

  // const [errorMessage, setErrorMessage] = useState('')

  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: ''
  })

  // console.log("Book title: " + book.title, "book isbn: " + book.isbn )

  const onChange = (e) => {
   // console.log("e.target.name: " + e.target.name, " e.target.value: " + e.target.value)
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', book)
      .then((res) => {
        setBook({
          originalUrl: '',
          shortUrl: '', // added. need?
          urlId: '' // added. need?
        });

        // const id = book._id.valueOf();
        // Push to http://localhost:3002/show-book/649adcdb2d0ddf2a46e3839d
        console.log(res.data.id) // console.log(res) also works
        navigate(`/show-book/${res.data.id}`);
        // navigate(`/show-book/${book.id}`); // changed. navigate('/');
      })
      .catch((err) => {
        // alert(err.response.data) // console.log(err.response.data.msg) - from update book info
        console.log(err.response.data) // not: err.response.data.msg
        console.log('Error in CreateBook!');

        setError( {
          errorStatus: true,
          errorMessage: err.response.data
        });
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Shorten me</h1>
            {/* <p className='lead text-center'>Create new book</p> */}

            { error.errorStatus ? <ErrorComp error={error.errorMessage}/> : null }
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='url'
                  placeholder='Paste your full link here e.g. https://www.google.com'
                  name='originalUrl'
                  className='form-control'
                  value={book.originalUrl}
                  onChange={onChange}
                  // onChange={(e) => validate(e.target.value)}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
