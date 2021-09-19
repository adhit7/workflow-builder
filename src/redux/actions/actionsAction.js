import {ADD_ACTION, CLEAR_CURRENT, DELETE_ACTION, GET_ACTIONS, SET_CURRENT, UPDATE_ACTION} from "./types";
import {useSelector} from "react-redux";

export const getActions = () => {
    return async dispatch => {
        dispatch({
            type: GET_ACTIONS
        });
    };
};

export const addActions = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_ACTION,
            payload: data
        });
    };
};

export const updateAction= (data) => {
    return async dispatch => {
        dispatch({
            type: UPDATE_ACTION,
            payload: data
        });
    };
};

export const setCurrent = (data) => {
    return async dispatch => {
        dispatch({
            type: SET_CURRENT,
            payload: data
        });
    };
}


export const deleteAction = (id) => {
    return async dispatch => {
        dispatch({
            type: DELETE_ACTION,
            payload: id
        });
    };
};
