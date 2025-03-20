import React, { useEffect, useState } from "react";

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
            {data?.map((item) =>
                <li>{item.name}</li>
            )}
        </ul>
    )
}
export default DataFetch;