import React from 'react';

function ErrorComp (props) {
  // console.log("props: " + props)

  return (
    <h5 className="text-danger text-center">Error: {props.error}</h5>
  )
}

export default ErrorComp
