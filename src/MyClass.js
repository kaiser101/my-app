import React, { Component } from "react";
import increment from "./actions/index";
import { connect } from "react-redux";

class MyClass extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.functions = new Set();
    }

    handleClick() {
        console.log("handleClick");
        // this.setState((state, props) => {
        //     return { count: state.count + 1 };
        // });
        const { count } = this.props;
        this.props.incrementCounter(count ? count : 1);
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
        console.log("This", this);
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <div>Count is {this.props.count}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (cnt) => dispatch(increment(cnt)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyClass);
