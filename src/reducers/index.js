import {combineReducers} from "redux";
import {taskListReducer} from "./taskList";

export default combineReducers({
  taskList: taskListReducer
});
