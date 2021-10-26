import React from 'react';
import { Button } from 'react-bootstrap';
import Todo from './Todos';
import AddNewSchedule from './AddNewSchedule';
import { getData } from './LocalStorage';

export default function Scheduler() {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState(getData());

  const changeDataState = () => {
    setData(getData());
  };
  return (
    <>
      <h1 className="text-center p-5 title-heading fw-bold">My Scheduler</h1>
      {data.length !== 0 ? (
        <div className="container d-flex justify-content-lg-center justify-content-center flex-wrap gap-4 scheduler-container mt-3">
          {data.map((todo) => <Todo key={todo.id} todo={todo} onSave={changeDataState} />)}
        </div>
      ) : (
        <h2 className="text-center fw-bold">No Schedule Found..</h2>
      )}
      <Button
        className="btn btn-success position-fixed bottom-0 end-0 m-5 p-3 rounded-pill"
        variant="none"
        onClick={() => setModalShow(true)}
      >
        Add New Schedule
      </Button>
      <AddNewSchedule
        show={modalShow}
        onHide={(val) => setModalShow(val)}
        onSave={changeDataState}
      />
    </>
  );
}
