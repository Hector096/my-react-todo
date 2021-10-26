import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function Todos({ todo }) {
  return (
    <div className="card text-center todo-card ">
      <img src={todo.imgUrl} className="card-img" alt="past2" />
      <div className="card-img-overlay d-flex flex-column">
        <div className="my-auto mx-auto text-center">
          <h5 className="card-title text-center">{todo.title}</h5>
          <h3 className="card-title text-center">{todo.day}</h3>
          <h6 className="card-subtitle mb-1 text-muted text-center">
            {`${todo.date.split(' ')[1]
            } ${
              todo.date.split(' ')[2]
            } ${
              todo.date.split(' ')[3]}`}
          </h6>
          <p className="card-text text-center ">
            Total Tasks :
            {todo.taskList.length}
          </p>

          <Link
            to={`/schedule/${todo.id}`}
            className="btn btn-outline-danger fw-bold"
            variant="none"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}

Todos.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    taskList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      scheduleTime: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};
