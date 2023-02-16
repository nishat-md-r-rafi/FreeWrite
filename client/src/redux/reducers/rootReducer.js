import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import sortReducers from "./sortReducer";

const rootReducer = combineReducers({
    content : contentReducer,
    sort : sortReducers
});

export default rootReducer;