import React from "react";
import withStyling from "./withStyling";
import HelloComponent from "./HelloComponent";

class MyComponent extends React.Component {
    handleClick() {
        console.log("clicked");
    }

    render() {
        const EnhancedHello2 = withStyling(HelloComponent);

        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <EnhancedHello2 />
            </div>
        );
    }
}

export default MyComponent;
