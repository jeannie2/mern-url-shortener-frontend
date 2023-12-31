import React, { useState } from 'react'

const CopyToClipboard = ({copyText}) => {
  // console.log(copyText.data)
  const [isCopied, setIsCopied] = useState(false)

  async function copyToClipboard(text) {
    return await navigator.clipboard.writeText(text)
  }

  const handleCopy = () => {
    copyToClipboard(copyText)
    .then(()=> {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1500);
    })
    .catch((err) => {
      console.log(err)
    });
}

return (
  <>
  <input type="text" value={copyText} readOnly className="border-0 w-50 bg-transparent"/>
  <button type="button" className="btn btn-light" onClick={handleCopy}>
  <span> <i className="fa fa-clipboard"></i> {isCopied ? ' Copied' : ' Copy'}</span>
  </button>
  </>
)
}

export default CopyToClipboard;
