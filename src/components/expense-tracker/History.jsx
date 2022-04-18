import React , { useContext } from "react";
import {TransactionContext } from "../../context/TransactionState"
import TransactionItem from "./TransactionItem";
function History() {
  const {transactions}= useContext(TransactionContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
               {
                   transactions.map(transaction=>(
                       <TransactionItem key={transaction.id} transaction={transaction} />
                   ))
               }
            </ul>

        </>
    )
}
export default History