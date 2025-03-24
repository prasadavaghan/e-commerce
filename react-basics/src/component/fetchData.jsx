import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [searchKey,setSearchKey]=useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }, [])
    const handleFilter = (e) => {
        let data1 = [...data];
        let tempData = data1.filter((item) => { return item.name.toLowerCase().includes(e.target.value) })
        console.log(tempData, data)
        setData([...tempData]);
    }
    return (
        <ul>
            <nav>
                <Link to="/" > Counter</Link>
                <Link to="/todo" > Todo List</Link>
                <Link to="/data" > Data Fetch</Link>

            </nav>
            <div>
                <input type="text" onChange={(e) => handleFilter(e)} />
            </div>
            {data?.map((item) =>
                <li>{item.name}</li>
            )}
        </ul>
    )
}
export default DataFetch;