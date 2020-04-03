import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [open, setOpen] = useState(false);

    const toggleChildMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={toggleChildMenu}>Toggle Menu from Parent</button>
            <ChildComponent open={open} />
        </div>
    );
};

export default ParentComponent;
