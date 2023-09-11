import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import {Form, Formik} from "formik";
import { registerUser} from "../redux/action/UserAction";
import CustomField from "../components/CustomField";
import {TextField} from "formik-mui";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import {isAuth} from "../lib/helper";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
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
          name: '',
          avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867'
        }}
        validationSchema={userSchema}
        onSubmit={(values, ) => {
          dispatch(registerUser(values))
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
              label="Name"
              name="name"
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

export default SignUp;

const userSchema = yup.object({
  email: yup.string().required().min(3),
  password: yup.string().required().min(3),
  name: yup.string().required().min(3),
})