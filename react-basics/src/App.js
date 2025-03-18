import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import React, { useCallback, useState } from 'react';
import Counter from './component/counter';

function App() {
  const [page, setPage] = useState("Home")
  const [count, setCount] = useState(0)
  const myComponent = React.lazy(()=>import("../src/component/lazyComponent"))
  function handleClick() {
    setCount(count + 1);
    setPage("Home" ? "test" : "Home")
  }
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count])
  return (
    <div>
      <Navbar msg={page} />
      Callback
      <button onClick={handleClick}>Counter {count}</button>
      <Counter counter={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
