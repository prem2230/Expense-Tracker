import './App.css';
import { useEffect, useState } from "react";
import { Header } from './components/Header';
import Home from './components/home/Home';
import Transactions from './components/transaction/Transactions';
function App() {

  const [balance,setBalance] = useState(0);
  const [amount,setAmount] = useState('');
  const [description,setDescription] = useState('');
  const [transaction,setTransaction] = useState([]);
  const[transactionType,setTransactionType] = useState('')
  const[search,setSearch] = useState('')

  useEffect(()=>{
    const oldBalance = JSON.parse(localStorage.getItem('balance'))
    const oldTransaction = JSON.parse(localStorage.getItem('transaction'));

    if(oldTransaction){
      setTransaction(oldTransaction)
    }
    if(oldBalance){
      setBalance(oldBalance)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('transaction',JSON.stringify(transaction))
    localStorage.setItem('balance',JSON.stringify(balance))
  },[transaction,balance]);

 
   

  const handleAdd =(e)=>{
    e.preventDefault();
    if(!amount || amount<0 || !description || !transactionType ){
      alert('please enter a valid amount and description and fill all the details');
      return
    }
    const standardCase=(description)=>{
      return description.toLowerCase().split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join('')
    }
    const newTransaction ={
      id:new Date().getTime(),
      type:transactionType,
      amount : parseFloat(amount),
      description: standardCase(description)
    }
    
    setTransaction([...transaction,newTransaction])
    if(transactionType==='Income'){
      setBalance(balance+parseFloat(amount));
    }else if(transactionType==='Expense'){
      setBalance(balance-parseFloat(amount));
    }
    setAmount('')
    setDescription('')  
    setTransactionType('')  
  }
  const handleClear=(e)=>{
    e.preventDefault()
    setAmount('')
    setDescription('')
    setTransactionType('')
  }
  const handleReset=(e)=>{
    e.preventDefault()
    setTransaction([])
    setBalance(0)
  }
  const handleDelete=(id)=>{
    const deletedTransaction = transaction.find((item)=>item.id===id);
    if(deletedTransaction){
    const updateTransaction = transaction.filter((item)=>item.id!==id)
    setTransaction(updateTransaction)
      if(deletedTransaction.type ==='Income'){
        setBalance(balance-deletedTransaction.amount)
      }else{
        setBalance(balance+deletedTransaction.amount)
      }
  }
  }
  const filteredTransaction = transaction.filter((item)=>item.description.toLowerCase().includes(search.toLowerCase()) || item.amount.toString().includes(search))
  
  return (
    <div className="App">
      <Header />
      <Home 
        balance = {balance}
        amount={amount}
        setAmount={setAmount}
        description={description}
        setDescription = {setDescription}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        handleAdd = {handleAdd}
        handleClear={handleClear}
      />
      <Transactions 
        search={search}
        setSearch={setSearch}
        handleDelete={handleDelete}
        handleReset={handleReset}
        filteredTransaction={filteredTransaction}
      />
      
    </div>
  );
}

export default App;
