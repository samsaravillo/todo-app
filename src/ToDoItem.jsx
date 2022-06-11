import React from "react";

const ToDoItem = ({ todo, handleToggle }) => {
  const handleCompletedItem = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      key={todo.id + todo.task}
      id={todo.id}
      value={todo.id}
      onClick={handleCompletedItem}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
    </div>
  );
};

export default ToDoItem;
