import React, { Component } from "react";

class MyClass extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.functions = new Set();
    }

    handleClick() {
        console.log("handleClick");
        this.setState((state, props) => {
            return { count: state.count + 1 };
        });
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    render() {
        this.functions.add(this.handleClick);
        console.log(this.functions.size);
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <div>Count is {this.state.count}</div>
            </div>
        );
    }
}

export default MyClass;
