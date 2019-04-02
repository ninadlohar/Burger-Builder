import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import OrderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";

const logger = store => {
  return next => {
    return action => {
      console.log("[mw] dispactching", action);
      const result = next(action);
      console.log("[mw] next state", store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: OrderReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
