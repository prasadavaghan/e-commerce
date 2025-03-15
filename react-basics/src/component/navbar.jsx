import React, { memo } from "react";

const Navbar = ({ msg }) => {
    console.log("msg from app js", msg)
    return (
        <div>
            This is Navbar from {msg}
        </div>
    )
}
export default memo(Navbar);