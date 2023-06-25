import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

export const Card = ({ imgService, serviceTitle }) => {
  return (
    <div>
      <Link to={`/servicios/${serviceTitle}`} onClick={handleLinkClick}>
        <img
          className="rounded-[3.5rem] mt-12 lg:mt-14 mx-auto lg:w-[370px] h-[370px]"
          width={320}
          src={imgService}
          alt="image-carrousel"
        />
      </Link>
    </div>
  );
};
Card.propTypes = {
  imgService: PropTypes.string,
  serviceTitle: PropTypes.string,
};
