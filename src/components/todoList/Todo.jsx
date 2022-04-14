import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import {addTodo, deleteTodo} from '../../redux/index'
import { useDispatch, useSelector } from "react-redux";
function Todo(){
    const todoData= useSelector(state=>state.todos);
    const dispatch = useDispatch();
    const addItem= (item) =>{
        dispatch(addTodo(item));
    };
    const deleteItem=(index)=>{
        dispatch(deleteTodo(index));
    }
    
    return(
        <div>
            <TodoForm addItem={addItem} />
            <TodoList deleteItem={deleteItem} todoData={todoData} />
        </div>
    )
}
export default Todo