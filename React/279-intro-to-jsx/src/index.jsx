// Before React 18
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </>,
  document.querySelector("#root")
);


// Using React 18
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.querySelector("#root"));
// root.render(
//   <>
//     <h1>Hello World</h1>
//     <p>This is a paragraph.</p>
//   </>
// );