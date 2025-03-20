import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }, [])
    console.log("users", data);
    return (
        <ul>
            <nav>
                <Link to="/" > Counter</Link>
                <Link to="/todo" > Todo List</Link>
                <Link to="/data" > Data Fetch</Link>

            </nav>
            {data?.map((item) =>
                <li>{item.name}</li>
            )}
        </ul>
    )
}
export default DataFetch;