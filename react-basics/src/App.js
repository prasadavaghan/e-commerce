import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import React, { useCallback, useState } from 'react';
import Counter from './component/counter';
import TodoList from './component/todoList';
import DataFetch from './component/fetchData';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    // <div>
    //   <Navbar msg={page} />
    //   Callback
    //   
    //   <Counter counter={count} increment={increment} decrement={decrement} />
    //   <TodoList />
    //   <DataFetch />
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/data' element={<DataFetch />} />
      </Routes>
    </Router>
  );
}

export default App;
