import React, { useState } from 'react'

import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
 //current todo item's value
 const [todo,setTodo]=React.useState('')

 //add todo item to todo list
 const [todoList,setTodoList]=React.useState([])

 //adding items handler function
 //avoid adding empty values
 const addTodo=()=>{
  if (todo !== ''){
    setTodoList([...todoList,todo])
    setTodo('') //empty the input field after adding
  }
 }


 //delete todo items
 const deleteTodo=(text)=>{
  const newtodoList=todoList.filter((todo)=>{
    return todo !== text;
  })
  setTodoList(newtodoList)

 }

  return (
    <div className="app">

      <h1>Todo List</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todoList={todoList} deleteTodo={deleteTodo}/>

     
     

    </div>
    
  
  )
}

export default App
