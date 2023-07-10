import React, { useState } from 'react';

const CopyToClipboard = ({copyText}) => {
  // console.log(copyText.data)
  const [isCopied, setIsCopied] = useState(false)

async function copyToClipboard(text) {
  return await navigator.clipboard.writeText(text);
}

const handleCopy = () => {
  copyToClipboard(copyText)
  .then(()=> {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  })
  .catch((err) => {
    console.log(err)
  });
}

return (
  <>
  <input type="text" value={copyText} readOnly size="30" />
  <button onClick={handleCopy}>
  <span>{isCopied ? 'Copied' : 'Copy'}</span>
  </button>
   {/* <button onClick={() =>  navigator.clipboard.writeText(book.shortUrl)} > Copy </button> */}
  </>
)
}

export default CopyToClipboard;

/* reference: https://blog.logrocket.com/implementing-copy-clipboard-react-clipboard-api/ */
