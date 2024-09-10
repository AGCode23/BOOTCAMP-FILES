import { createRoot } from "react-dom/client";

// Using variable to render
// const root = createRoot(document.getElementById("root"));
// root.render(
//   // Using a React Fragment <></> or simply wrapping all the HTML tags in a single <div> allows you to use multiple HTML tags inside the render method.
//   <>
//     <h1>Hello World</h1>
//     <p>This is a paragraph.</p>
//   </>
// );

// Direct
createRoot(document.getElementById("root")).render(
  // Using a React Fragment <></> or simply wrapping all the HTML tags in a single <div> allows you to use multiple HTML tags inside the render method.
  <>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </>
);
