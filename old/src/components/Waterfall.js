import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Waterfall() {
  const navigate = useNavigate(); //added
  const { urlId } = useParams();

    useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${urlId}`)
      .then((res) => {
        console.log(res.data)
       // setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [urlId]);

  /*
    useEffect(() => {
    axios
    // .get(`http://localhost:8082/api/books/shortie/`) // eg https://www.stump.com/software
    // .get('http://localhost:8082/api/books/')
    .get(`http://localhost:8082/api/books/short/${urlId}`) // pass additional parameter?
    //  .get(`http://localhost:8082/api/books/short/${urlId}`)
      // .get(`http://localhost:8082/${urlId}`) // final version
      .then((res) => {
        // navigate(res.data.originalUrl)
        // navigate('/test');
        // console.log("HOP")
         console.log("res: " + res.data) //res.data
      })
      .catch((err) => {
        console.log('Error from waterfall');
        console.log(err)
        console.log("urlID: " + urlId)
      });
  }); // },); */

  /*
  .catch((err) => {
        console.log('Error from waterfall');
        console.log(err)
        console.log("urlID: " + urlId)
      });
  }, [urlId]); */

  // return (
  //   <h1>You are being redirected</h1>
  // )
}

export default Waterfall
