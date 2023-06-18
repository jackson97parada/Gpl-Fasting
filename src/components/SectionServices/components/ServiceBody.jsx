import PropTypes from "prop-types";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export const ServiceBody = ({
  title,
  description,
  image,
  descriptionStatus,
}) => {
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <Slider {...settings}>
        <div>
          1
          <img
            className="rounded-[3.5rem] mt-12 mx-auto h-[336px]"
            width={320}
            src={image}
            alt={title}
          />
        </div>
        <div>
          2
          <img
            className="rounded-[3.5rem] mt-12 mx-auto h-[336px]"
            width={320}
            src={image}
            alt={title}
          />
        </div>
      </Slider>
      <div>
        <h2>ESTADISTICAS</h2>
        <div className="flex">
          <img src="" alt="IMAGE STATUS" />
          <p>{descriptionStatus}</p>
        </div>
      </div>
    </main>
  );
};

ServiceBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  descriptionStatus: PropTypes.string.isRequired,
};
