import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { rootReducer, rootSaga } from "./store";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// const store = configureStore({
//   // Automatically calls `combineReducers`
//   reducer: {
//     posts: postsReducer,
//     weather: weaterReducer
//   }

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

compose(applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
