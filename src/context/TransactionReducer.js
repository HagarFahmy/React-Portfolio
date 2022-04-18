export default (state,action)=>{
    switch (action.type) {
        case "DELETE_TRASNACTION":
            return{
                ...state,
               transactions:state.transactions.filter((transaction,id)=>(transaction.id!== action.payload))
            }
        case "ADD_TRASNACTION":
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        default:
            return state;
    }
}