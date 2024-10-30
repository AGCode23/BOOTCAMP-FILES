import PropTypes from "prop-types";

const Entry = ({ emoji, name, description }) => {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span>{name}</span>
        </dt>
        <dd>{description}</dd>
      </div>
    </>
  );
};

Entry.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Entry;
