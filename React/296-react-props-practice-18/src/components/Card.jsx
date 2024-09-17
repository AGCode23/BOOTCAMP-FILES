// Using proptypes to add more robustness
import PropTypes from "prop-types";

const Card = ({ name, img, tel, email }) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img className="circle-img" src={img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{tel}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  );
};

// Using proptypes to add more robustness
Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
