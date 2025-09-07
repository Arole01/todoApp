import "./App.css";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
const Todo = () => {

  const [ todo, setTodo] = useState("");
  const [todolist,setTodolist] = useState(()=>{const checkTodo = localStorage.getItem("todo")
  if(checkTodo) {
    return JSON.parse(checkTodo)
  }else{
    return []
  }})
  

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todolist))
  }, [todolist])
  return (
    <div>
    <h1 className="title">My Todo List</h1>
    <form >
      <input className="search" type="text" placeholder="Search Todos"/>
    </form>

    
    <div className="todo-container">
    <div className="form-delete">
      {todolist.map((items,index)=>
      <div style={{display:"flex"}} key={index}>
      <h1 className="item" >{items}</h1> <MdDelete className="delet" onClick={()=>{
      setTodolist(todolist.filter((dof, items)=> items!== index))
      }}/>
      </div>
      )}
    </div>
      </div>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setTodolist([...todolist,todo])
      setTodo("")
    }}>
      <h1 className="addTodo">Add a new todo...</h1>

      <input className="todotext" type="text"  value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
      
      <button type="submit">Submit</button>
    </form>
  
    </div>
  )

}









export default Todo;