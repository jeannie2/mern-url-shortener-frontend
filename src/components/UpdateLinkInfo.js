import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import ErrorComp from './ErrorComp'
import Logo from './Logo';

function UpdateLinkInfo(props) {
  const [link, setLink] = useState({
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
      //.get(`https://mern-link-shortener-backend.vercel.app/api/links/show/${id}`)
      .get(`https://mern-link-shortener-backend-production.up.railway.app/api/links/show/${id}`)
      // .get(`http://localhost:8082/api/links/show/${id}`)

      // .get(`http://localhost:8082/api/books/${id}`) -> same as showbookdetails - so no conflict with test.js (the localhost:3000/:urlId to redirect
      .then((res) => {
        setLink({
          originalUrl: res.data.originalUrl,
          shortUrl: res.data.shortUrl,
          urlId: res.data.urlId
        });
      })
      .catch((err) => {
        console.log('Error from UpdateLinkInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setLink({ ...link, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      originalUrl: link.originalUrl,
      shortUrl: link.shortUrl,
      urlId: link.urlId
    };

    axios
      // .put(`https://mern-link-shortener-backend.vercel.app/api/links/${id}`, data)
      //.put(`http://localhost:8082/api/links/${id}`, data)
    .put(`https://mern-link-shortener-backend-production.up.railway.app/api/links/${id}`, data)

      .then((res) => {
        navigate(`/show-link/${id}`);
      })
      .catch((err) => {
        console.log(err.response.data.msg) // err.response.data. console.log(err) also works
        console.log('Error in UpdateLinkInfo!');
        setError( {
          errorStatus: true,
          errorMessage: err.response.data.msg
        });
      });
  };

  return (
    <>
    <Logo />
    <div className='update-link-info h-100'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-md-8 m-auto align-items-center'>
            { error.errorStatus ? <ErrorComp error={error.errorMessage}/> : null }
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label className='form-label mt-2'>http://localhost:3002/</label>
                <input
                  type='text' // url
                  placeholder={link.urlId}
                  name='urlId'
                  className='form-control w-50 mx-auto'
                  value={link.urlId}
                  onChange={onChange}
                />
              </div>

              <div className='text-center mt-3'>

                <Link to={`/show-link/${id}`} className='btn btn-outline-primary float-left my-2 mx-2'>
                  My link details
                </Link>
                <button
                  type='submit'
                  className='btn btn-outline-secondary btn btn-block mx-auto'
                >
                  Update
                </button>
              </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default UpdateLinkInfo;
