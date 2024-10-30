import styles from "./Note.module.css";
import PropTypes from "prop-types";

const Note = ({ title, content }) => (
  <div className={styles.note}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

// Use implicit return if returning jsx without additional logic

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
