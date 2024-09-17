import styles from "./App.module.css";

const App = () => {
  const date = new Date();
  const hours = date.getHours();
  //Dynamically change the color of the h1 using inline css styles.
  //Morning = red, Afternoon = green, Night = blue.

  const getGreetingAndColor = () => {
    //Show a single h1 that says "Good morning" if between midnight and 12PM.
    if (hours < 12) {
      return { greeting: "Good Morning", cssColor: "red" };
      //or "Good Afternoon" if between 12PM and 6PM.
    } else if (hours < 18) {
      return { greeting: "Good Afternoon", cssColor: "green" };
      //or "Good evening" if between 6PM and midnight.
    } else {
      return { greeting: "Good Evening", cssColor: "blue" };
    }
  };

  const { greeting, cssColor } = getGreetingAndColor();
  console.log(cssColor);
  return (
    <div>
      {/* Apply the "heading" style in the styles.css */}
      <h1 className={styles.heading} style={{ color: cssColor }}>
        {greeting}
      </h1>
    </div>
  );
};

export default App;

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
