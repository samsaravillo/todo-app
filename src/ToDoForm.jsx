import React, { useState } from "react";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import { Button, TextField, Container } from "@material-ui/core";

const ToDoForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log("cliked", event);
    addTask(input);
    setInput("");
    // db.collection('toDoList').add({
    //   todo: input,
    //   datetime: firebase.firestore.FieldValue.serverTimestamp()
    // })
    // setInput('');
  };

  return (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="todo"
        label="Enter ToDo"
        name="todo"
        autoFocus
        value={input}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTodo}
        disabled={!input}
        startIcon={<AddCircleOutlineRounded />}
      >
        Add Todo
      </Button>
    </form>
  );
};

export default ToDoForm;
