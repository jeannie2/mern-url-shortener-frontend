import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorComp from './ErrorComp'

const CreateBook = (props) => {
  // console.log("props: " + props.originalUrl)
  const navigate = useNavigate();
  const [book, setBook] = useState({
    originalUrl: '',
    shortUrl: '', // added. need?
    urlId: '' // added. need?
  });

  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: ''
  })

  const onChange = (e) => {
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
        console.log(res.data.id)
        navigate(`/show-link/${res.data.id}`);
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
    <div className='CreateBook h-100'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-md-8 m-auto align-items-center'>
            {/* <h1 className='display-4 text-center'>Shorten me</h1> */}
            { error.errorStatus ? <ErrorComp error={error.errorMessage}/> : null }
            <form onSubmit={onSubmit}>
              <div className='form-group create-link-input'>
                <input
                  type='url'
                  placeholder='Paste your full link here e.g. https://www.google.com'
                  name='originalUrl'
                  className='form-control w-100'
                  value={book.originalUrl}
                  onChange={onChange}
                  // onChange={(e) => validate(e.target.value)}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-secondary btn-lg mt-4 mx-auto d-block'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
