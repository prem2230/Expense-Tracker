import React from 'react'
import Listitems from './Listitems'
import Button from './Button'

const Transactions = ({search,setSearch, handleDelete, handleReset, filteredTransaction}) => {
  return (
    <div className="txns">
     <input 
      type="text"
      placeholder="Search"
      role='search'
      value={search}
      onChange={(e)=>setSearch(e.target.value.trim())} 
      />
      <Listitems 
        handleDelete={handleDelete}
        filteredTransaction={filteredTransaction}
      />
      <Button
        handleReset={handleReset}
      />
    </div>
  )
}

export default Transactions