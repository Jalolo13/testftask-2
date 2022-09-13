import { combineReducers } from "redux";
import studentReducer from "./store/studentSlice";

const rootReducer = combineReducers({
    students: studentReducer,
});

export default rootReducer;
