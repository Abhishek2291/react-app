import React from "react";
import Home from "./page/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Departments from "./page/Departments";
import Layout from "./components/Layout";
import Doctors from "./page/Doctors";
import About from "./page/About";
import Contact from "./page/Contact";
import Appoinments from "./page/Appoinments";
import Login from "./page/Login";
import Medicine from "./page/Medicine";
import PrivateRoute from "./utils/PrivateRoute";
import AdminRoute from "./utils/AdminRoute";
import UpdateMedicine from "./page/UpdateMedicine";
import AddMedicine from "./page/AddMedicine";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/departments" element={<Layout><Departments /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/medicine" element={<AdminRoute><Layout><Medicine /></Layout></AdminRoute>} />
        <Route path="/updateMedicine/:id" element={<AdminRoute><Layout><UpdateMedicine /></Layout></AdminRoute>} />
        <Route path="/addMedicine" element={<AdminRoute><Layout><AddMedicine /></Layout></AdminRoute>} />
        <Route path="/contact" element={<PrivateRoute><Layout><Contact /></Layout></PrivateRoute>} />
        <Route path="/appoinments" element={<Layout><Appoinments /></Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
