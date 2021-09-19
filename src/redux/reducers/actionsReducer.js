import {ADD_ACTION, DELETE_ACTION, GET_ACTIONS, SET_CURRENT, UPDATE_ACTION} from "../actions/types";

const initialState = {
    messages:[],
    current:[],
};

export default(state = initialState, action) => {
    switch (action.type){
        case GET_ACTIONS:
            return {
                ...state
            }
        case ADD_ACTION:
            return {
                ...state,
                messages: [...state.messages,action.payload]
            }
        case UPDATE_ACTION:
            return {
                ...state,
                messages: state.messages.map(message => message.id === action.payload.id ? action.payload : message)
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            }
        case DELETE_ACTION:
            return {
                ...state,
                messages : state.messages.filter(message => message.id !== action.payload)
            }
        default:
            return state;
    }
}

