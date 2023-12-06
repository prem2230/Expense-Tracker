import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";


const Listitems = ({handleDelete, filteredTransaction}) => {
  return (
    <div className="listItems">
      {filteredTransaction.map((transaction) => (
      <div className="items" key={transaction.id}>
        <div 
        className='itemss'
        style={transaction.type === 'Income'? {borderBottom:'2px solid green'}:{borderBottom:'2px solid red'}}
        key={transaction.id}>
          <span key={`description - ${transaction.id}`}>{transaction.description}</span>
          <span key={`amount - ${transaction.id}`}>{` ${transaction.amount}  \u20B9`}</span>
        </div>
        <MdOutlineDeleteOutline 
        role='button'
        className='icon'
        key={`delete-${transaction.id}`}
        onClick={()=>handleDelete(transaction.id)} />
      </div>
      ))}
    </div>
  )
}

export default Listitems