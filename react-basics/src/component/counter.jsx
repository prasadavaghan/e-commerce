import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
    const [page, setPage] = useState("Home")
    const [count, setCount] = useState(0)
    const myComponent = React.lazy(() => import("../src/component/lazyComponent"))
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
            <nav>
                <Link to="/" > Counter</Link>
                <Link to="/todo" > Todo List</Link>
                <Link to="/data" > Data Fetch</Link>

            </nav>
            <button onClick={handleClick}>Counter {count}</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;