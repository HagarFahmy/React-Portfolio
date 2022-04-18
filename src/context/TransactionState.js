import { createContext,useReducer } from "react";
import TransactionReducer from './TransactionReducer'
//intial state
const intialState={
    transactions:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ],
} 
//create context
export const TransactionContext= createContext(intialState);

//Provider component
export const  TransactionProvider = ({children})=>{
const [state, dispatch]=useReducer(TransactionReducer,intialState);
function deleteTransaction(id){
    dispatch({
        type:"DELETE_TRASNACTION",
        payload:id
    })
}
function addTransaction(transaction){
    dispatch({
        type:"ADD_TRASNACTION",
        payload:transaction
    })
}
return(
    <TransactionContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </TransactionContext.Provider>
)
}