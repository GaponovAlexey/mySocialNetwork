import { applyMiddleware, combinereducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './jsreducer';
import thunk from "redux-thunk";

const rootReducer = combinereducers