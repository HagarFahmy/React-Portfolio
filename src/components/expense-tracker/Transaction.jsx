import { useContext, useState } from 'react'
import { TransactionContext } from '../../context/TransactionState'
function Transaction() {
  const { addTransaction } = useContext(TransactionContext);
  const[text,setText]=useState("");
  const[amount,setAmount]=useState(0);
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const newTransaction={
      id:Math.floor(Math.random()*1000),
      text: text,
      amount: +amount 
    }
    addTransaction(newTransaction);
    setAmount(0);
    setText("")
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} placeholder="Enter text..."  onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
export default Transaction