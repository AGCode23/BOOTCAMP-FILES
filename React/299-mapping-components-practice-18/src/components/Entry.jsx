import PropTypes from "prop-types";

const Entry = ({ emoji, name, meaning }) => {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span>{name}</span>
        </dt>
        <dd>{meaning}</dd>
      </div>
    </>
  );
};

Entry.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
};

export default Entry;
