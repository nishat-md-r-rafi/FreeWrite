import { ADD_CONTENT, LOAD_CONTENT } from './../actionTypes';

const INITIAL_STATE = [];

export default function sortReducers(state = INITIAL_STATE, action) {
    switch (action.type){
        case LOAD_CONTENT:
            return [...state]
        default: return state
    }
}