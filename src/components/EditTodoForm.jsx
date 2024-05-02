/* eslint-disable react/prop-types */
import { useState } from "react";

export const EditTodoForm = ({ editTodo , task }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Update task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">update Task</button>
    </form>
  );
};
