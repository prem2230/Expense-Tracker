import React from 'react'
import Button from './Button'

const Addtransaction = ({amount,setAmount,description, setDescription, transactionType, setTransactionType, handleAdd, handleClear}) => {
  return (
    <div className="addTxn">
      <form >
      <input 
          type="number"
          placeholder ="Amount" 
          id='amount'
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}/>

          <input 
          type="text" 
          placeholder = "Description"
          id='description'
          value={description}
          required
          onChange={(e)=>setDescription(e.target.value.trim())} />
          <div className="checkBox">
            <div>
              <input 
              type="checkbox" 
              id='expense'
              checked={transactionType==='Expense'}
              onChange={()=>setTransactionType('Expense')} />
              <label htmlFor="expense">Expense</label>
            </div>
            <div>
              <input 
              type="checkbox"
              id='income'
              checked={transactionType==='Income'}
              onChange={()=>setTransactionType('Income')} />
              <label htmlFor="income">Income</label>
            </div>
          </div>
        <Button 
          handleAdd={handleAdd}
          handleClear={handleClear}
        />
      </form>
    </div>
  )
}

export default Addtransaction