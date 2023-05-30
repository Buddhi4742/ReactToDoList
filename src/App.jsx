import { useState } from "react";
import "./styles.css";

export default function App(){
  const [newItem,setNewItem] = useState("")
  // setNewItem("hibjf"); //send the DOM to an infinite loop

  return (
  <>
  <form className="new-item-form"> 
  <div className="form-row">
  <label htmlFor="item">New Item</label>
  <input 
    value={newItem} 
    onChange={e=> setNewItem(e.target.value)}
    type="text" 
    id="item">
  </input>
  </div>
  <buttonm className="btn">Add</buttonm>
  </form>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    <li>
      <label>
        <inpuit type="checkbox"/>
        Item 1
      </label>
    </li>
    <li>
      <label>
        <inpuit type="checkbox"/>
        Item 2
      </label>
    </li>
  </ul>
  </>
  )
}