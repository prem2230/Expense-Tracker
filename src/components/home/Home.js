import React from 'react'
import { Balance } from './Balance'
import Addtransaction from './Addtransaction'

const Home = ({balance, amount, setAmount, description, setDescription, transactionType, setTransactionType , handleAdd, handleClear }) => {
  return (
    <div className="home">
      <Balance 
        balance ={balance}/>
      <Addtransaction 
        amount={amount}
        setAmount = {setAmount}
        description={description}
        setDescription={setDescription}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        handleAdd={handleAdd}
        handleClear={handleClear}
      />
</div>
  )
}

export default Home