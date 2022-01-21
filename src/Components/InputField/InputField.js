import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useField } from "formik";

export const InputField = ({ label, textarea, ...props }) => {
  const [field] = useField(props);

  return (
    <Form.Group>
      <Form.Label htmlFor={field.name}>{label}</Form.Label>
      <FormControl
        as={textarea ? "textarea" : "input"}
        {...field}
        {...props}
        id={field.name}
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
  label: String,
  textarea: Boolean,
};
