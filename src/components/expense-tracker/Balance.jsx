import { useContext } from "react";
import {TransactionContext } from "../../context/TransactionState"

function Balance() {
    const {transactions}= useContext(TransactionContext);
    let amount = transactions.map(item=>item.amount);
    let total = amount.reduce((acc,item)=>(acc+=item),0);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>$ {total}</h1>
        </>
    )
}
export default Balance