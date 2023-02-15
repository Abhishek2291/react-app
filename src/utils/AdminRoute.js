import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = (props) => {

  if (JSON.parse(localStorage.getItem("user"))?.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return <div>{props.children}</div>;
};

export default AdminRoute;
