import "./App.css";
import { useState } from "react";
const Todo = () => {

  const [ todo, setTodo] = useState("")
  return (
    <div>
    <h1 className="title">My Todo List</h1>
    <form >
      <input className="search" type="text" placeholder="Search Todos"></input>
    </form>

    <h1 className="addTodo">Add a new todo...</h1>
    <h2> this is my {todo}</h2>
    <form>
      <input className="todotext"></input>
    </form>
    <button type="submit">Submit</button>
    </div>
  )

}









export default Todo;