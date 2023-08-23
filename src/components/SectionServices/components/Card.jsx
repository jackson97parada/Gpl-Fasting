import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

export const Card = ({ imgService, serviceTitle, serviceSubtitle }) => {
  return (
    <div className="duration-300 hover:translate-y-3">
      <Link to={`/servicios/${serviceTitle}`} onClick={handleLinkClick}>
        <img
          className="-z-10 mx-auto mt-12 h-[370px] w-auto rounded-[3.5rem] object-cover brightness-50 duration-300 hover:shadow-lg hover:shadow-[#0378a6] md:object-fill lg:mt-14 lg:w-[370px]"
          src={imgService}
          alt="image-carrousel"
        />
        <h1 className="relative bottom-48 z-10 text-center text-2xl font-bold text-white">
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
