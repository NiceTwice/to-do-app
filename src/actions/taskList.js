import {nanoid} from "nanoid";
import {ADD_TASK, REMOVE_TASK, VALIDATE_TASK} from "../constants/taskListActionTypes";

export const addTask = ({text}) => ({
  type: ADD_TASK,
  payload: {
    id: nanoid(),
    text: text,
    created: new Date().getTime(),
    validated: false
  }
})

export const removeTask = ({id}) => ({
  type: REMOVE_TASK,
  payload: {
    id: id
  }
});

export const validateTask = ({id, validated}) => ({
  type: VALIDATE_TASK,
  payload: {
    id,
    validated
  }
});
