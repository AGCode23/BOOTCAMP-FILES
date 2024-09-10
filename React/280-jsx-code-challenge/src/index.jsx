//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

// Before React 18
import React from "react";
import { render } from "react-dom";

render(
  <>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </>,
  document.getElementById("root")
);

// Using React 18
// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(
//   <>
//     <h1>My Favorite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </>
// );
