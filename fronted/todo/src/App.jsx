import { useState, useEffect } from 'react'
import './App.css'
import Createtodo from './components/Createtodo'
import Todos from './components/Todos'

function App() {

  const [todos, setTodos]=useState([])

  // fetch('http://localhost:3000/todos')
  // .then(async function (res){
  //   const data=await res.json()
  //   setTodos(data.todos)
  // })
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const data = await res.json();
        setTodos(data.todos);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <>
       <Createtodo></Createtodo>
       <Todos todos={todos}></Todos>
    </>
  )
}

export default App
