import { useState } from "react";
import "./styles.css";

export default function App(){
  const [newItem,setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  // setNewItem("hibjf"); //send the DOM to an infinite loop
  
  function handleSubmit(e) {
    e.preventDefault()
    setTodos((currentTodos) => {
      return  [ ...currentTodos,
        {id:crypto.randomUUID(), 
          title: newItem, 
          completed: false
        },
      ]
    })
    // setTodos((currentTodos) => {
    //   return  [ ...currentTodos,
    //     {id:crypto.randomUUID(), 
    //       title: newItem, 
    //       completed: false
    //     },
    //   ]
    // })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form"> 
  <div className="form-row">

    {/* {JSON.stringify(todos)} */}

  <label htmlFor="item">New Item</label>
  <input 
    value={newItem} 
    onChange={e=> setNewItem(e.target.value)}
    type="text" 
    id="item">
  </input>
  </div>
  <button className="btn">Add</button>
  </form>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return(
        <li key={todo.id}>
          <label>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={event => toggleTodo(todo.id,event.target.checked)}/>
            {todo.title}
          </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      )
    })}
  </ul>
  </>
  )
}