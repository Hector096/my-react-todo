import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="card text-center todo-card">
      <img src={todo.imgUrl} className="card-img" alt="past2" />
      <div className="card-img-overlay d-flex">
        <div className="my-auto mx-auto text-center">
          <h3 className="card-title text-center">{todo.day}</h3>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            {todo.date}
          </h6>
          <p className="card-text text-center pt-3 ">
            Total Tasks :{todo.taskList.length}
          </p>
          <button
            className="btn btn-outline-danger fw-bold"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#"+todo.day}
          >
            View Full Schedule
          </button>
        </div>
      </div>

    <div className="modal fade" id={todo.day} data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
  <div className="modal-dialog-centered w-75 m-auto">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{todo.day} Tasks</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Todo;
