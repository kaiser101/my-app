import React from "react";

const ChildComponent = ({ open }) => {
    console.log("open", open);
    return <div>{open && "Open"}</div>;
};

export default ChildComponent;
