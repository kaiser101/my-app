import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import MyGrid from "./MyGrid";
import MyComponent from "./MyComponent";
import ParentComponent from "./ParentComponent";
import MyClass from "./MyClass";
import MyClass1 from "./MyClass1";

class App extends Component {
    render() {
        const childProps = {
            label: "Name",
            value: "Sudharma",
        };

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>

                <Test {...childProps} />
                <MyGrid></MyGrid>
                <MyComponent />
                <ParentComponent />
                <MyClass1 />
            </div>
        );
    }
}

export default App;
