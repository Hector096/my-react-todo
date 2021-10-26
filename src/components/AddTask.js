import React, { useState } from 'react';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { PropTypes } from 'prop-types';
import TodoModel from '../model/todoModel';

export default function AddTask(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [dateTime, setDateTime] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!title || !dateTime || !desc) {
      alert('All the fields should be filled'); // eslint-disable-line 
    } else {
      const newTask = new TodoModel(
        '',
        title,
        desc,
        dateTime.toString(),
        false,
      );
      newTask.addNewTask(props.id);
      setTitle('');
      setDesc('');
      props.onUpdate();
      props.onHide(false);
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
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
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
          <Button type="submit">Add Task</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

AddTask.propTypes = {
  onHide: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
