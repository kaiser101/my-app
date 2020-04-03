import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [logger, thunk];

const store = createStore(
    reducer,
    { count: 2 },
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
