const App = () => {
  // Using inline css
  // <h1 style={{ color: "red", fontSize: "20px" }}>Hello World</h1>

  // Using object
  const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px black solid",
  };

  // To change current value of object
  customStyle.color = "blue";
  // return <h1 style={customStyle}>Hello World</h1>;

  // Modern way to update css object is create a new object with updated color
  const updatedStyle = {
    ...customStyle,
    color: "green", // Change the color immutably
  };

  return (
    <h1
      style={updatedStyle /* Use the updated object to your specific element */}
    >
      Hello World
    </h1>
  );

  // You can also modularize CSS by creating a CSS file with proper naming, e.g., App.module.css.
  // Then import it into your JSX file, e.g., import styles from './App.module.css'.
  // To use it: <h1 className={styles.cssNameHere}>Hello</h1>
};

export default App;
