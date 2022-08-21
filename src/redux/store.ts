import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redusers/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './sagas'
import { IInitialState } from "../types";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store;
