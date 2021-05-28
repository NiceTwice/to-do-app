import {createReducer} from "./createReducer";
import {ADD_TASK, REMOVE_TASK, VALIDATE_TASK} from "../constants/taskListActionTypes";

export const taskListReducer = createReducer([], {
  [ADD_TASK]: addTask,
  [REMOVE_TASK]: removeTask,
  [VALIDATE_TASK]: validateTask
})

function addTask(state, {payload}){
  return [...state, payload];
}

function removeTask(state, {payload: {id}}){
  return state.filter(i => i.id !== id);
}

function validateTask(state, {payload: {id, validated}}){
  return state.map(i => {
    if (i.id === id)
      return {
        ...i,
        validated
      };

    return i;
  })
}
