import { useEffect } from 'react';
// import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Test() {
  const { urlId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${urlId}`)  // .get('http://localhost:8082/api/books/test') <!-- was this before?
      .then((res) => {
        console.log("res.data.originalUrl " + res.data.originalUrl)
        window.location.href = res.data.originalUrl // can use navigate (local) in final version bc same domain ??
        return false
      })
      .catch((err) => {
        console.log("error in test: " + err)
        console.log("urlID: " + urlId)
      });
  // https://stackoverflow.com/questions/71320109/which-is-correct-way-to-use-navigate-dependency-in-useeffect
  //eslint-disable-next-line
  }, [urlId]); // },);

  // return (
  //   <h1>You are being redirected</h1>
  // )
}

export default Test
