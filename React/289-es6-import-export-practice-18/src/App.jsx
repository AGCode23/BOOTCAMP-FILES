//Import the add, multiply, subtract and divide functions
import { add, multiply, subtract, divide } from "./calculator.js";
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
const App = () => {
  return (
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  );
};

export default App;
