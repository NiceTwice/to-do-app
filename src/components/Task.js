import React, {useCallback} from "react";
import {ListGroupItem, CustomInput, Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {removeTask, validateTask} from "../actions/taskList";

export const Task = ({item: {id, text, validated}}) => {
  const dispatch = useDispatch();

  const validate = useCallback(() => {
    dispatch(validateTask({
      id,
      validated: !validated
    }));
  }, [validated]);

  const remove = useCallback(() => {
    dispatch(removeTask({id}));
  }, []);

  return (
    <ListGroupItem className="d-flex">
      <div>
        <CustomInput
          title="Validate task"
          id={id}
          className="pt-1"
          type="checkbox"
          checked={validated}
          onChange={validate}/>
      </div>
      <div className={`mx-1 flex-grow-1 ${validated ? 'text-muted text-decoration-line-through' : ''}`}>
        {text}
      </div>
      <div>
        <Button
          title="Remove task"
          size="sm"
          color="danger"
          onClick={remove}>
          X
        </Button>
      </div>
    </ListGroupItem>
  )
}

export default Task;
