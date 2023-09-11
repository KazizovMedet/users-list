import React, {useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import CustomField from "../components/CustomField";
import { TextField} from "formik-mui";
import {Box, Button} from "@mui/material";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {authUser} from "../redux/action/UserAction";
import {useNavigate} from "react-router-dom";
import {isAuth} from "../lib/helper";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth()){
      navigate('/')
    }
  },[isAuth()])
  return (
    <Box style={{display: 'flex', paddingTop: '50px', alignItems: 'center', justifyContent: 'center'}}>
      <Formik
        initialValues={{
          password:  '',
          email:  '',
        }}
        validationSchema={userSchema}
        onSubmit={(values, ) => {
          dispatch(authUser(values))
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '500px'
            }}
          >
            <CustomField
              component={TextField}
              label="Email"
              name="email"
            />
            <CustomField
              component={TextField}
              label="Password"
              name="password"
            />
            <Button type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignIn;

const userSchema = yup.object({
  email: yup.string().required().min(3),
  password: yup.string().required().min(3),
})