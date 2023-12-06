import React from 'react'

const Button = ({handleAdd, handleClear}) => {
  return (
    <div className="btn">
      <button 
      className="addBtn" 
      onClick={(e)=>handleAdd(e)}>
      Add</button>
      <button 
      className="addBtn" 
      onClick={(e)=>handleClear(e)}>
      Clear</button>
    </div>
  )
}

export default Button