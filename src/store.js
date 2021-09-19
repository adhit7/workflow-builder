import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

