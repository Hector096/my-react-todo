import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import Schedule from "../model/scheduleModel";
import AddTask from "./AddTask";
import { getData , saveData} from "../components/LocalStorage";
import TodoModel from "../model/todoModel";

export const ScheduleModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState(()=>{let data = getData()
    // const [desc, setDesc] = React.useState("");
    const index = data.findIndex((item) => item.id === props.todo.id)
    let tasks = data[index].taskList
    return tasks});

 const updateTask = ()=>{
    let data = getData()
   const index = data.findIndex((item) => item.id === props.todo.id)
   let tasks = data[index].taskList
   setData(tasks)
 } 
 
//  const onUpdate = (id)=>{
//   let data = getData()
//   const index = data.findIndex((item) => item.id === props.todo.id)
//   let tasks = data[index].taskList
//   let taskIndex = data[index].taskList.findIndex((item)=>item.id === id)
//   tasks[taskIndex].desc = desc;
//   saveData(data)
//   updateTask()
//  }

  const onDeleteSchedule = () => {
    let item = new Schedule(props.todo.id);
    item.removeSchedule();
    props.onHide(false);
    props.onSave();
  };

  const taskDelete = (id) => {
    let item = new TodoModel(id)
    item.removeTask(props.todo.id)
    updateTask()
    props.onSave();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      className="h-75"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.todo.day +
            " " +
            props.todo.date.split(" ")[1] +
            " " +
            props.todo.date.split(" ")[2] +
            " " +
            props.todo.date.split(" ")[3] +
            " Tasks"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data === undefined || data.length === 0 ? (
          <h2 className="text-center fw-bold">No Task Found..</h2>
        ) : (
          data.map((item)=>{
            return (
              <>
          <Col className="d-flex justify-content-between align-items-center" key={item.id}>
            <input className="p-2 border-0" placeholder={item.title} type='text'  />
              <p className="align-self-center">{ props.todo.date.split(" ")[4]}</p>
            <i className="far fa-trash-alt text-danger" onClick = {()=>{taskDelete(item.id)}}></i>
          </Col>
            </>
            )
          })
        )}

        <Col className="d-flex justify-content-center align-items-center">
          <Button
            className="bg-white text-success border-0"
            onClick={() => setModalShow(true)}
          >
            Add New Task
          </Button>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-danger border-0" onClick={onDeleteSchedule}>
          Delete Schedule
        </Button>
      </Modal.Footer>
      <AddTask
        id = {props.todo.id}
        onUpdate = {updateTask}
        onSave={props.onSave}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Modal>
  );
};
