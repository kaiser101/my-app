import React from "react";

const withStyling = (BaseComponent) => (props) => (
    <BaseComponent
        {...props}
        style={{
            weight: 700,
            color: "green",
        }}
    />
);

export default withStyling;
