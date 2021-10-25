import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { getData, saveData } from "../components/LocalStorage";

export default function EditTask(props) {
  const [title, setTitle] = useState(props.data.title);
  const [desc, setDesc] = useState(props.data.desc);
  const [dateTime, setDateTime] = useState(props.data.scheduleTime);
  const submit = (e) => {
    e.preventDefault();
    if (!title || !dateTime || !desc) {
      alert("All the fields should be filled");
    } else {
      let data = getData();
      const index = data.findIndex((item) => item.id === props.id);
      let taskList = data[index].taskList;
      const taskIndex = taskList.findIndex((item) => item.id === props.data.id);
      taskList[taskIndex].title = title;
      taskList[taskIndex].desc = desc;
      taskList[taskIndex].scheduleTime = dateTime.toString();
      saveData(data);
      props.onUpdate();
      props.onHide(false);
    }
  };
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
        <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
          <Col className="mb-3">
            <Form.Control
              placeholder="Task Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col className="mb-3">
            <Form.Control
              placeholder="Task Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Col>
          <Col className="mb-3">
            <TimePickerComponent
              placeholder="Choose a time"
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
            />
          </Col>
          <Button type="submit" className="bg-success">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
