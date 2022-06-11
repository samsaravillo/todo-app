import React, { useState, useEffect } from 'react';
import data from "./data.json";
//import logo from './logo.svg';
import './App.css';
//import db from './services/firebase-config';
//import firebase from 'firebase';
import Header from './header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { Container } from "@material-ui/core";

function App() {
  const [toDoList, setToDoList] = useState(data);

  useEffect(() => {
   defaultModel();
  }, []);

  const defaultModel = () => {
    console.log('useEffect Hook!!!');

    // db.collection('toDoList').orderBy('datetime', 'desc').onSnapshot(snapshot => {
    //   console.log('Firebase Snap!');
    //   setToDoList(snapshot.docs.map(doc => {
    //     return {
    //       id: doc.id,
    //       name: doc.data().todo,
    //       datatime: doc.data().datatime
    //     }
    //   }))
    // })
  }

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <Container maxWidth="md">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask}/>
    </Container >
  );
}

export default App;
