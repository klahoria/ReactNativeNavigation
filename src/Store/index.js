import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducer from "./reducer";



const store = createStore(reducer, applyMiddleware(thunk, promise));


export default store;
