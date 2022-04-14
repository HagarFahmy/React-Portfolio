import './TodoList.css'
function TodoList({ todoData,deleteItem }) {
    return (
      <div id='container' >
      {
          todoData && todoData.length>0 ? todoData.map((item , index )=>{
              return(
                  <div className="border m-5 p-3" key={index}>
                      <span>title</span>
                      <p>{item.title}</p>
                      <span>Contant</span>
                      <p>{item.content}</p>
                      <button onClick={()=>{deleteItem(index)}} className=' btn btn-outline-secondary'>XxX</button>
                  </div>
              )

          }) : <div id="empty"><h3 >Your Todo List Is Empty </h3></div>
      }
      
      </div>
    )
}

export default TodoList


