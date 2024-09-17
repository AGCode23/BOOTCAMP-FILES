// Import the default export (pi) and named exports (doublePi and triplePi) from the "./math.js" module.
import pi, { doublePi, triplePi } from "./math.js";

// Uncomment the line below to import everything from "./math.js" as a single object named `pi`.
// This would mean you would access exports like `pi.default` for the default export and `pi.doublePi` for named exports.
// import * as pi from "./math.js";

const App = () => {
  return (
    <ul>
      {/* Display the value of the default export `pi` */}
      <li>{pi}</li>

      {/* Call and display the result of the `doublePi` function */}
      <li>{doublePi()}</li>

      {/* Call and display the result of the `triplePi` function */}
      <li>{triplePi()}</li>
    </ul>

    // Uncomment the block below if using the wildcard import method to access the default and named exports.
    // <ul>
    //   {/* Display the value of the default export accessed via `pi.default` */}
    //   <li>{pi.default}</li>

    //   {/* Call and display the result of `doublePi` accessed via `pi.doublePi` */}
    //   <li>{pi.doublePi()}</li>

    //   {/* Call and display the result of `triplePi` accessed via `pi.triplePi` */}
    //   <li>{pi.triplePi()}</li>
    // </ul>
  );
};

// Export the App component as the default export of this module.
export default App;
