import React from 'react'

export const Balance = ({balance}) => {
  return (
    <div className="balance" >
      <span>Balance</span> 
      <span style={balance<1 ? {color:"red"}:{}}>  {`${balance} \u20B9` }</span>
    </div>
  )
}


export default Balance