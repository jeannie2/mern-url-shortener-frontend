import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate(); //added
  const { urlId } = useParams();
    useEffect(() => {

    axios
    // .get(`http://localhost:8082/api/books/shortie/`) // eg https://www.stump.com/software
    // .get('http://localhost:8082/api/books/')
    // .get('http://localhost:8082/api/books/test') <!-- was this before?
      // .get('http://localhost:8082/api/books/')
      .get(`http://localhost:8082/api/books/${urlId}`)
      // .get( `http://localhost:8082/api/books/test${urlId}`)
    // .get('http://localhost:8082/api/books/short')
    //  .get(`http://localhost:8082/api/books/short/${urlId}`)
      // .get(`http://localhost:8082/short/${urlId}`)
      .then((res) => {
        //navigate(res.data.originalUrl)
        console.log("res.data.originalUrl " + res.data.originalUrl)
        //console.log(res.data.originalUrl)
        // console.log("TEST")
       // console.log("res originalUrl: " + res.data.originalUrl) //res.data
        // navigate(`/test/${res.data.originalUrl}`);
        // navigate(`${res.data.originalUrl}`);
        // window.location.assign(res.data.originalUrl)
        // window.location.replace(res.data.originalUrl)
        window.location.href = res.data.originalUrl//({`/${res.data.originalUrl}`}); // can use navigate (local) in final version bc same domain ??
        return false
      })
      .catch((err) => {
        console.log('Error from waterfall');
        console.log(err)
        console.log("urlID: " + urlId)
      });
  // https://stackoverflow.com/questions/71320109/which-is-correct-way-to-use-navigate-dependency-in-useeffect
  //eslint-disable-next-line
  }, [urlId]); // },);

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

export default Test
