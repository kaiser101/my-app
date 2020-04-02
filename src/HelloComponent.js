import React from "react";

const HelloComponent = ({ name, ...otherProps }) => (
    <div {...otherProps}>Hello {name}!</div>
);

export default HelloComponent;
