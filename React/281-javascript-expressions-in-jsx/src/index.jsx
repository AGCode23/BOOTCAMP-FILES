import React from "react";
import ReactDOM from "react-dom";

const fName = "John";
const lName = "Doe";
const luckyNumber = 7;
ReactDOM.render(
  <>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10) + 1}.</p>
  </>,
  document.getElementById("root")
);
