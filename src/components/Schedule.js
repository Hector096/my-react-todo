import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { getData } from "../components/LocalStorage";
import Schedule from "../model/scheduleModel";
import TodoModel from "../model/todoModel";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

export default function ScheduleComponent() {
  const { id } = useParams();
  let history = useHistory();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalUpdate, setModalUpdate] = React.useState(false);

  const [scheduleData] = React.useState(() => {
    let data = getData();
    const index = data.findIndex((item) => item.id === id);
    return data[index];
  });
  const [data, setData] = React.useState(scheduleData.taskList);

  const updateTask = () => {
    let data = getData();
    const index = data.findIndex((item) => item.id === id);
    let tasks = data[index].taskList;
    setData(tasks);
  };
  const taskDelete = (itemId) => {
    let item = new TodoModel(itemId);
    item.removeTask(id);
    updateTask();
  };

  const onDeleteSchedule = () => {
    let item = new Schedule(id);
    item.removeSchedule();
    history.push("/");
  };

  return (
    <>
      <h2 className="text-center p-5 title-heading fw-bold">
        {scheduleData.day +
          " " +
          scheduleData.date.split(" ")[1] +
          " " +
          scheduleData.date.split(" ")[2] +
          " " +
          scheduleData.date.split(" ")[3] +
          " Tasks"}
      </h2>
      <div className="scheduler-container">
        {data === undefined || data.length === 0 ? (
          <h2 className="text-center fw-bold">No Task Found..</h2>
        ) : (
          data.map((item) => {
            return (
              <Row className="m-5 p-2" key={item.id}>
                <Col>
                  <div className="d-flex">
                    <h3 className="me-5">{item.title}</h3>
                    <h4 className="ms-5">{item.desc}</h4>
                  </div>
                  <h5 className="ps-2">
                    {`Scheduled At : ${item.scheduleTime.split(" ")[4]}`}{" "}
                  </h5>
                </Col>
                <Col className=" d-flex justify-content-center align-items-center">
                  <i
                    className="fas fa-edit text-dark h3 me-5"
                    onClick={() => setModalUpdate(true)}
                  ></i>
                  <EditTask
                    id={id}
                    data={item}
                    onUpdate={updateTask}
                    show={modalUpdate}
                    onHide={() => setModalUpdate(false)}
                  />
                  <i
                    className="far fa-trash-alt text-danger h3"
                    onClick={() => {
                      taskDelete(item.id);
                    }}
                  ></i>
                </Col>
              </Row>
            );
          })
        )}
        <div className="position-fixed bottom-0 end-0 m-5">
          <Button
            className="btn btn-success   p-3 rounded-pill"
            onClick={() => setModalShow(true)}
          >
            Add New Task
          </Button>

          <Button
            className="btn btn-danger ms-2 p-3 rounded-pill"
            onClick={onDeleteSchedule}
          >
            Delete Schedule
          </Button>
        </div>
      </div>
      <AddTask
        id={id}
        onUpdate={updateTask}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
