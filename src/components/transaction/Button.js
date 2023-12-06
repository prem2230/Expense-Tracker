import React from 'react'

const Button = ({handleReset}) => {
  return (
    <div className="clear">
      <button 
      className="resetBtn" 
      onClick={(e)=>handleReset(e)}>
      Reset</button>
    </div>
  )
}

export default Button