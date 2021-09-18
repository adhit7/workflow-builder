import { combineReducers } from "redux";
import actionsReducer from "./actionsReducer";

export const rootReducer = combineReducers({
    workflow:actionsReducer
});