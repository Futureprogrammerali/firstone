import React from "react";
import ReactDOM from "react-dom";
import Car from "./Car.js";
//import MyForm from "./MyForm.js";
//import BigForm from "./BigForm.js";
import FormikForm from "./FormikForm.js";

ReactDOM.render(<Car case="Benz" />, document.getElementById("car"));
//ReactDOM.render(<MyForm color="red" />, document.getElementById("myform"));

ReactDOM.render(
  <FormikForm title="Here my text" />,
  document.getElementById("myform")
);
