import React, { Component } from "react";
import incrementAsync from "./actions/index";
import { connect } from "react-redux";

const MyClass1 = ({ count, incrementCounter }) => {
    const handleClick = () => {
        console.log("handleClick");
        incrementCounter(count ? count : 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <div>Count is {count}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({ count: state.count });

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: (cnt) => dispatch(incrementAsync(cnt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyClass1);
