import  History  from "./History"
import Header from "./Header"
import Income from "./Incom"
import Transaction from "./Transaction"
import Balance from "./Balance"
import { TransactionProvider } from "../../context/TransactionState"
import './expence-tracker.css'
function ExpenceTracker(){
    return(
        <div className="expence-tracker-container">
       <TransactionProvider>
       <Header/>
        <Balance/>
        <Income/>
        <History/>
        <Transaction/>
       </TransactionProvider>
        </div>
    )
}
export default ExpenceTracker