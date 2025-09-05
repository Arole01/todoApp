import "./App.css";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
const Todo = () => {

  const [ todo, setTodo] = useState("");
  const [todolist,setTodolist] = useState([])
  return (
    <div>
    <h1 className="title">My Todo List</h1>
    <form >
      <input className="search" type="text" placeholder="Search Todos"/>
    </form>

    <h1 className="addTodo">Add a new todo...</h1>
    {/*<h2> this is my {todo}</h2>*/}
    
    <div className="form-delete">
      {todolist.map((items,index)=>
      <h1 key={index}>{items} <MdDelete className="delet" onClick={()=>{
      setTodolist(todolist.filter((dof, items)=> items!== index))
      }}/>
      </h1>
      )}
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setTodolist([...todolist,todo])
      setTodo("")
    }}>
      <input className="todotext" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
      <button type="submit">Submit</button>
    </form>

    </div>
  )

}









export default Todo;