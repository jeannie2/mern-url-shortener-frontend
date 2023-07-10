import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import ErrorComp from './ErrorComp'

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
      .get(`http://localhost:8082/api/books/show/${id}`)
      // .get(`http://localhost:8082/api/books/${id}`) -> same as showbookdetails - so no conflict with test.js (the localhost:3000/:urlId to redirect
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
        navigate(`/show-link/${id}`); // navigate(`/show-book/${id}`);
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
            <Link to={`/show-link/${id}`} className='btn btn-outline-warning float-left'>
              My link details
            </Link>

            {/* <Link to={`/show-book/${id}`} className='btn btn-outline-warning float-left'></Link> */}
          </div>
        </div>

        <div className='col-md-8 m-auto'>
        { error.errorStatus ? <ErrorComp error={error.errorMessage}/> : null }
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group' >
              <label id="ice-cream" htmlFor='originalUrl'>http://localhost:3002/</label>
              <input
                type='text' //url
                placeholder={book.urlId}
                name='urlId'
                className='form-control'
                value={book.urlId}
                onChange={onChange}
                id="watermelon"
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
