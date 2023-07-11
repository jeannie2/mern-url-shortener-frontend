import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import CopyToClipboard from "./CopyToClipboard"
// import Logo from './Logo'

function ShowLinkDetails(props) {
  const [link, setLink] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios
      // .get(`http://localhost:8082/api/links/show/${id}`)
      .get(`https://mern-link-shortener-backend-production.up.railway.app/api/links/show/${id}`)

       // .get(`http://localhost:8082/api/books/${id}`) -> so no conflict with test.js (the localhost:3000/:urlId to redirect
      .then((res) => {
        setLink(res.data)
      })
      .catch((err) => {
        console.log('Error from ShowLinkDetails')
      })
  }, [id])

  const LinkItem = (
    <div className="h-100">
      <table className='table'>
        <tbody>
          <tr>
            <td className="fw-bold bg-transparent">Original url: </td>
            <td>{link.originalUrl}</td>
          </tr>

          <tr>
            <td className="fw-bold bg-transparent">short url: </td>
            {/* <td>{link.shortUrl}</td> */}
            <CopyToClipboard copyText={link.shortUrl} ></CopyToClipboard>
          </tr>

            <tr>
            {/* delete below when finish */}
            <td className="fw-bold bg-transparent">url id:</td>
            <td>{link.urlId}</td>
          </tr>

        </tbody>
      </table>
    </div>
  )

  return (
    <>
    {/* <Logo /> */}
    <div className='show-link-details h-100'>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-md-8 m-auto align-items-center'>
            {LinkItem}
            <div className='col-md-6 mx-auto text-center'>
             <Link
                to={`/`}
                className='btn btn-outline-secondary btn-block mx-auto'
              >
              Shorten new link
              </Link>

              <Link
                to={`/edit-link/${link._id}`}
                className='btn btn-outline-secondary btn-block mx-auto'
              >
              Custom back half
              </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ShowLinkDetails
