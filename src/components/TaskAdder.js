import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Form, Input, InputGroup, InputGroupAddon, Button} from "reactstrap";
import {addTask} from "../actions/taskList";

export const TaskAdder = ({onSubmit}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = useCallback(({target: {value}}) => {
    setText(value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!text?.length)
      return;

    dispatch(addTask({
      text: text
    }));

    setText("");
  }, [text, onSubmit]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          onChange={handleChange}
          required
          value={text}
          placeholder={"Type task..."}/>
        <InputGroupAddon addonType="append">
          <Button
            title="Add task"
            color="success">
            Add
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  )
}

export default TaskAdder;
