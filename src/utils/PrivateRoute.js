import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  if (!JSON.parse(localStorage.getItem("user"))?.email) {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
};

export default PrivateRoute;
