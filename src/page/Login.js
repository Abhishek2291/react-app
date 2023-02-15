import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const onSubmitHandler = (data) => {

    let user = data
    if(data.email === 'admin@admin.com'){
      user = { ...data , role : 'admin' }
    }

    localStorage.setItem("user",JSON.stringify(user))
    navigate('/')
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(10),
  });

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center text-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
      >
        {({ touched ,errors }) => (
          <Form style={{ width : '500px' }}>
            <div className="mb-4">
              <h1>Login</h1>
            </div>
            <div className="form-group row text-left mb-4">
              <label style={{ textAlign: "left" }} className="p-0">
                Email
              </label>
              <Field 
               style={{ width : '500px' }}
               type="text"
               name="email"
               placeholder="Enter your email"
               className={`login-input ${touched.email && errors.email ? 'error' : ''}`}
              />
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
            </div>
            <div className="form-group row text-left mb-4">
              <label style={{ textAlign: "left" }} className="p-0">
                Password
              </label>
              <Field
              style={{ width : '500px' }}
                type="password"
                name="password"
                placeholder="Entyer your password"
                className={`login-input ${touched.password && errors.password ? 'error' : ''}`}
              />
              <ErrorMessage
                className="text-danger"
                name="password"
                component="div"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
