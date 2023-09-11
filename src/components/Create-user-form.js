import React from 'react';
import {Field, Form, Formik} from "formik";
import {Button} from "@mui/material";
import { TextField } from 'formik-mui';
import { CheckboxWithLabel } from 'formik-mui';
import CustomField from "./CustomField";
import * as yup from 'yup';

const CreateUserForm = ({onSubmit, user, onUpdate}) => {

  return (
      <Formik
        initialValues={{
          id: user.id || '',
          name: user.name || '',
          lastname: user.lastname || '',
          country: user.country || '',
          hired: user.hired || false,
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          if (user.id) {
            onUpdate(values);
          } else {
            onSubmit(values);
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
          >
            <CustomField
              component={TextField}
              label="Name"
              name="name"
            />
            <CustomField
              component={TextField}
              label="Lastname"
              name="lastname"
            />
            <CustomField
              component={TextField}
              label="Country"
              name="country"
            />
            <Field
              component={CheckboxWithLabel}
              type="checkbox"
              name="hired"
              Label={{ label: 'Hired' }}
            />
            <Button type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
  );
};

export default CreateUserForm;

const userSchema = yup.object({
  name: yup.string().required().min(3),
  lastname: yup.string().required().min(3),
  country: yup.string().required().min(3),
  hired: yup.boolean(),
})