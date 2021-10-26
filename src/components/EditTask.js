import React, { useState } from 'react';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { PropTypes } from 'prop-types';
import { getData, saveData } from './LocalStorage';

export default function EditTask(props) {
  const {
    taskupdate, data, id, onHide,
  } = props;
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.desc);
  const [dateTime, setDateTime] = useState(data.scheduleTime);
  const submit = (e) => {
    e.preventDefault();
    if (!title || !dateTime || !desc) {
      alert('All the fields should be filled'); // eslint-disable-line 
    } else {
      const schedule = getData();
      const index = schedule.findIndex((item) => item.id === id);
      const { taskList } = schedule[index];
      const taskIndex = taskList.findIndex((item) => item.id === data.id);
      taskList[taskIndex].title = title;
      taskList[taskIndex].desc = desc;
      taskList[taskIndex].scheduleTime = dateTime.toString();
      saveData(data);
      taskupdate();
      onHide(false, '');
    }
  };
  return (
    <Modal
      {...props} // eslint-disable-line 
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

EditTask.propTypes = {
  onHide: PropTypes.func.isRequired,
  taskupdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    scheduleTime: PropTypes.string.isRequired,
  }).isRequired,
};
