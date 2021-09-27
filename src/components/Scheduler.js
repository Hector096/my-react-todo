import React from "react";
import Todo from "../components/Todos";

const Scheduler = (props) => {
  return (
    <>
      <h1 className="text-center p-5 title-heading fw-bold">My Scheduler</h1>

      {props.todos.length !== 0 ? (
        <div className="container d-flex justify-content-lg-between justify-content-center flex-wrap gap-4 scheduler-container mt-3">
          {props.todos.map((todo) => {
            return <Todo todo={todo}/>;
          })}
        </div>
      ) : (
        <h2 className="text-center fw-bold">No Schedule Found..</h2>
      )}

      <button
        type="button"
        className="btn btn-success position-fixed bottom-0 end-0 m-5 p-3 rounded-pill"
      >
        Add New
      </button>
    </>
  );
};

export default Scheduler;
