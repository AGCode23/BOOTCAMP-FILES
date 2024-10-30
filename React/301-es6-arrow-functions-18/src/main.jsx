import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map((x) => x * 2);

// console.log(newNumbers);

// //Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter((num) => {
//   return num < 10;
// });

// console.log(newNumbers);s

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

// //Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);

// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => {
//   return num > 10;
// });

// console.log(newNumber);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
