import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {Task} from "./Task";
import _ from "lodash"
import {ListGroup} from "reactstrap";

export const TaskList = () => {
  const list = useSelector(({taskList}) => taskList);

  const sortedList = useMemo(() => {
    return _.orderBy(list, ['created'], ['desc']);
  }, [list]);

  return (
    <ListGroup>
      {sortedList.map(t => {
        return (
          <Task
            key={t.id}
            item={t}/>
        )
      })}
    </ListGroup>
  )
}

export default TaskList;
