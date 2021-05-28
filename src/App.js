import React from "react";
import {Container} from "reactstrap";
import {TaskAdder} from "./components/TaskAdder";
import {TaskList} from "./components/TaskList";

function App() {
  return (
    <div>
      <Container className="d-flex flex-column overflow-hidden pt-4 pb-4">
        <TaskAdder/>
        <div class="flex-grow-1 overflow-auto mt-2">
          <TaskList/>
        </div>
      </Container>
    </div>
  );
}

export default App;
