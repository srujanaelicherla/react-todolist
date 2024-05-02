/* eslint-disable react/prop-types */

export const Todo = ({ task, toggleComplete, deleteTodo,editTodo }) => {
  console.log(task)
  return (
    <div style={{ alignItems: "center", display: "flex" }} className="todo">
      <p 
        style={{ marginRight: "10px" }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? "completed: "+ task.task : task.task}
      </p>
      <div>
        <button onClick = {()=>editTodo(task.id)}>Edit</button>
        <button onClick = {()=>deleteTodo(task.id)} >Delete</button>
      </div>
    </div>
  );
};
