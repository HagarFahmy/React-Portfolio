import { useContext } from "react";
import {TransactionContext } from "../../context/TransactionState"
function TransactionItem({transaction}) {
  const {deleteTransaction}= useContext(TransactionContext);
    let sign = transaction.amount>0 ? "+" : "-"
    return (
        <>
            <li className= {transaction.amount>0 ? "plus" :"minus"}>
                {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)} </span>
                <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
            </li>
        </>
    )
}
export default TransactionItem