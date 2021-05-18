import React from 'react';
import { Form } from 'react-bootstrap';

const WorkerForm = ({ handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={(evt) => handleChange('phone', evt.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Qualification"
          name="qualification"
          onChange={(evt) => handleChange('qualification', evt.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Experience"
          name="experience"
          onChange={(evt) => handleChange('experience', evt.target.value)}
        />
      </Form.Group>
    </>
  );
};

export default WorkerForm;
