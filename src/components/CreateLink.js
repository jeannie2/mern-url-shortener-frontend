import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ErrorComp from './ErrorComp'
import Logo from './Logo'

const CreateLink = (props) => {
  // console.log("props: " + props.originalUrl)
  const navigate = useNavigate()
  const [link, setLink] = useState({
    originalUrl: '',
    shortUrl: '', // need?
    urlId: '' // need?
  });

  const [error, setError] = useState({
    errorStatus: false,
    errorMessage: ''
  })

  const onChange = (e) => {
    setLink({ ...link, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault()

    axios
      // .post('http://localhost:8082/api/links', link)
      .post('https://mern-link-shortener-backend-production.up.railway.app/api/links', link)

      .then((res) => {
        setLink({
          originalUrl: '',
          shortUrl: '', // need?
          urlId: '' // need?
        })

        // const id = book._id.valueOf();
        console.log(res.data.id)
        navigate(`/show-link/${res.data.id}`)
      })
      .catch((err) => {
        console.log(err.response.data) // not: err.response.data.msg
        console.log('Error in CreateLink!')

        setError( {
          errorStatus: true,
          errorMessage: err.response.data
        });
      });
  };

  return (
    <>
    <Logo />
    <div className='create-link h-100'>
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
                  className='form-control w-75 mx-auto'
                  value={link.originalUrl}
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
    </>
  );
};

export default CreateLink
