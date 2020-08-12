import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/forgot-pass" component={ForgotPass} />
    </BrowserRouter>
  );
}

export default Routes;
