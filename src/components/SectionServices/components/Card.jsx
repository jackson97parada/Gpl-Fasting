import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

export const Card = ({ imgService, serviceTitle, serviceSubtitle }) => {
  return (
    <div>
      <Link to={`/servicios/${serviceTitle}`} onClick={handleLinkClick}>
        <img
          className="rounded-[3.5rem] mt-12 lg:mt-14 mx-auto lg:w-[370px] h-[370px] -z-10"
          width={320}
          src={imgService}
          alt="image-carrousel"
        />
        <h1 className="text-2xl font-bold relative bottom-48 left-[105px] z-10">
          {serviceSubtitle}
        </h1>
      </Link>
    </div>
  );
};
Card.propTypes = {
  imgService: PropTypes.string,
  serviceTitle: PropTypes.string,
  serviceSubtitle: PropTypes.string,
};
