import React from 'react';
import {Field, useField, useFormikContext} from "formik";

const CustomField = ({component, label, name, variant}) => {

  return (
    <Field
      component={component}
      label={label}
      name={name}
      // onChange={(e) => setFieldHelper.setValue(e.target.value)}
      type={name === 'password' ? 'password' : 'text'}
      variant={variant || "outlined"}
      disabled={false}
    />
  );
};

export default CustomField;