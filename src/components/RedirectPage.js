import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function RedirectPage() {
  const { urlId } = useParams()

  useEffect(() => {
    axios
      .get(`https://mern-link-shortener-backend-production.up.railway.app/api/links/${urlId}`)
      // .get(`http://localhost:8082/api/links/${urlId}`)  //  .get(`http://localhost:8082/api/books/${urlId}`) .get('http://localhost:8082/api/books/test')
      .then((res) => {
        console.log("res.data.originalUrl " + res.data.originalUrl)
        window.location.href = res.data.originalUrl
        return false
      })
      .catch((err) => {
        console.log("error in test: " + err)
        console.log("urlID: " + urlId)
      });
  // https://stackoverflow.com/questions/71320109/which-is-correct-way-to-use-navigate-dependency-in-useeffect
  //eslint-disable-next-line
  }, [urlId]) // },);

  // return (
  //   <h1>You are being redirected</h1>
  // )
}

export default RedirectPage
