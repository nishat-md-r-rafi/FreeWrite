import { ADD_CONTENT, LOAD_CONTENT } from './../actionTypes';

export function loadContent(data){
    return {
        type: LOAD_CONTENT,
        payload: data
    };
};
export function addContent(data){
    return {
        type: ADD_CONTENT,
        payload: data
    };
};
