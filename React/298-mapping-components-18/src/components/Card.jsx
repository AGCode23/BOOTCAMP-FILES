import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = ({ name, img, tel, email }) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar img={img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={tel} />
        <Detail detailInfo={email} />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default Card;
