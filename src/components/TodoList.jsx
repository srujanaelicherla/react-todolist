import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"


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

  const editTodo= id =>{
    setTodos(todos.map(todo => todo.id===id ? {...todo,isEditing: !todo.isEditing}: todo))
  }

  const editTask=(task,id) =>{
    setTodos(todos.map(todo=> todo.id===id ? {...todo,task,isEditing: !todo.isEditing}: todo))
  }
  return (
    <div className="Todo-wrapper">
    <h1 style={{color: "white"}}>Margaret</h1>
    <TodoForm className="actual-todo" addTodo={addTodo} />
    {todos.map((todo, index) =>(
      todo.isEditing?(<EditTodoForm key={index} editTodo={editTask} task={todo} />):(
      <Todo task={todo} key={index}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      /> 
    )))}
    </div>
  )
}
