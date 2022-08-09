import React from 'react';
import TodoList from './Components/TodoList';
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => ({ ...state }));
  console.log("state", state)
  return (
    <>
      <div className='App'>
        <TodoList />
      </div>
    </>
  )
}

export default App;
