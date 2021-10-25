import React from "react";
import { ScheduleModal } from "./Model";
import { Button } from "react-bootstrap";


export default function Todos({todo,onSave}) {

  const [modalShow, setModalShow] = React.useState(false);
 

  return (
    <div className="card text-center todo-card">
      <img src={todo.imgUrl} className="card-img" alt="past2" />
      <div className="card-img-overlay d-flex">
        <div className="my-auto mx-auto text-center">
          <h5 className="card-title text-center">{todo.title}</h5>
          <h3 className="card-title text-center">{todo.day}</h3>
          <h6 className="card-subtitle mb-1 text-muted text-center">
            {todo.date.split(" ")[1] +" "+ todo.date.split(" ")[2] + " " + todo.date.split(" ")[3]}
          </h6>
          <p className="card-text text-center ">
            Total Tasks :{todo.taskList.length}
          </p>
          <Button
            className="btn btn-outline-danger fw-bold"
            variant="none"
            onClick={() => setModalShow(true)}
          >
            View Full Schedule
          </Button>
        </div>
      </div>
      <ScheduleModal
        onSave = {onSave}
        todo={todo}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
