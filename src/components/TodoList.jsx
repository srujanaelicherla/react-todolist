import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"


export const TodoList = () => {
  const [todos, setTodos]= useState([])

  const addTodo = todo => {
    setTodos([...todos, {id: Math.random(), task:todo,
    completed:false, isEditing: false}])
    console.log(todos )
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ?{
      ...todo, completed: !todo.completed}: todo
    ))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id)) 
  }
  return (
    <div>
    <TodoForm addTodo={addTodo}/>
    {todos.map((todo, index) =>(
      <Todo task={todo} key={index}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}/> 
    ))}
    </div>
  )
}
