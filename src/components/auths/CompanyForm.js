import React from 'react';
import { Form } from 'react-bootstrap';

const CompanyForm = ({ handleChange }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Company name"
          name="company_name"
          onChange={(evt) => handleChange('company_name', evt.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Company description"
          name="company_description"
          onChange={(evt) => handleChange('company_description', evt.target.value)}
        />
      </Form.Group>
    </>
  );
};

export default CompanyForm;
