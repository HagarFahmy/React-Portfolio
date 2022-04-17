import './TodoList.css'
function TodoList({ todoData,deleteItem }) {
    return (
      <div id='container' >
      {
          todoData && todoData.length>0 ? todoData.map((item , index )=>{
              return(
                  <div className="border m-5 p-3" key={index}>
                      <h4>title</h4>
                      <p>{item.title}</p>
                      <h4>Contant</h4>
                      <p>{item.content}</p>
                      <button onClick={()=>{deleteItem(index)}} className=' btn btn-primary'>X</button>
                  </div>
              )

          }) : <div id="empty"><h3 >Your Todo List Is Empty </h3></div>
      }
      
      </div>
    )
}

export default TodoList


