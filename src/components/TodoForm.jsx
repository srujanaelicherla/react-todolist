/* eslint-disable react/prop-types */
import { useState } from "react"

export const TodoForm = ({addTodo}) => {
    const [value, setValue]= useState("")
    const handleSubmit =e => {
      e.preventDefault();
      addTodo (value);
      setValue("")
    }
  return (
    <form  className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="What is the task today?" 
      onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">Add Task</button>
    </form>
  )
}
 