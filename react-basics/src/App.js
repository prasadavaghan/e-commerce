import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("Home")
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
    setPage("Home" ? "test" : "Home")
  }
  return (
    <div>
      <Navbar msg={page} />
      Callback
      <button onClick={handleClick}>Counter {count}</button>
    </div>
  );
}

export default App;
