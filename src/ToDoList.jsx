import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList &&
        toDoList.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              handleToggle={handleToggle}
              todo={todo}
              handleFilter={handleFilter}
            />
          );
        })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Delete Completed Task
      </button>
    </div>
  );
};

export default ToDoList;
