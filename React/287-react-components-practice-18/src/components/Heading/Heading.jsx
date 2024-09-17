import styles from "./Heading.module.css";

const Heading = () => {
  const date = new Date();
  const currentTime = date.getHours();

  const getGreetingAndTime = () => {
    if (currentTime < 12) {
      return { greeting: "Good Morning", cssColor: "red" };
    } else if (currentTime < 18) {
      return { greeting: "Good Afternoon", cssColor: "green" };
    } else {
      return { greeting: "Good Evening", cssColor: "blue" };
    }
  };

  const { greeting, cssColor } = getGreetingAndTime();
  return (
    <h1 className={styles.heading} style={{ color: cssColor }}>
      {greeting}
    </h1>
  );
};

export default Heading;
