import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [data, setData] = useState("");
    const [items, setItems] = useState([])
    const handleInput = (e) => {
        e.preventDefault();
        setData(e.target.value);
    }
    const addTodo = () => {
        if (data.trim()) {
            setItems(
                [...items,
                    data,
                ]
            )
        }
        setData("")
    }
    console.log(items, data)
    return (
        <div>
            <nav>
                <Link to="/" > Counter</Link>
                <Link to="/todo" > Todo List</Link>
                <Link to="/data" > Data Fetch</Link>
            </nav>
            <h1>Todo List</h1>
            <div>
                <input type="text" onChange={handleInput} />
                <button onClick={addTodo}>Add todo</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default memo(TodoList);