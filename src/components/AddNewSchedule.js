import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import Schedule from "../model/scheduleModel";

export const AddNewSchedule = (props) => {
  const minDate = new Date(Date());
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !dateTime) {
      alert("All the fields should be filled");
    } else {
      let day = dateTime.getDay();
      if (day === 0) day = "Sunday";
      if (day === 1) day = "Monday";
      if (day === 2) day = "Tuesday";
      if (day === 3) day = "Wednesday";
      if (day === 4) day = "Thrusday";
      if (day === 5) day = "Friday";
      if (day === 6) day = "Saturday";

      let newSchedule = new Schedule("",title, day, dateTime.toString());
      newSchedule.addNewSchedule();
      setTitle("");
      setDateTime("");
      props.onHide(false);
      props.onSave();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Schedule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
          <Col className="mb-3">
            <Form.Control
              placeholder="Schedule Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
          <Col>
            <DateTimePickerComponent
              placeholder="Choose a date and time"
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
              min={minDate}
            />
          </Col>
          <Button type="submit">Add Schedule</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
