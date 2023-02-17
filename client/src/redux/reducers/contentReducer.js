import { ADD_CONTENT, LOAD_CONTENT } from './../actionTypes';

const INITIAL_STATE = [];

const  contentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case LOAD_CONTENT:
            return [...state];

        case ADD_CONTENT:
            return [...state, action.payload];

        default:
            return state   
    }
}

export default contentReducer
