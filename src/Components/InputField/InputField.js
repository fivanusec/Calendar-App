import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useField } from "formik";
import { PropTypes } from "prop-types";

export const InputField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <Form.Group>
      <Form.Label htmlFor={field.name}>{props.label}</Form.Label>
      <FormControl
        as="input"
        {...field}
        {...props}
        id={field.name}
        style={{ borderRadius: "24px" }}
        isInvalid={!!props.error}
      />
      {props.error ? (
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      ) : null}
    </Form.Group>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};
