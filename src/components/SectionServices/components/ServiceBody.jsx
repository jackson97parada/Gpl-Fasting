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
    <main className="px-10 py-20 space-y-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-justify">{description}</p>
      <Slider {...settings}>
        <div>
          <img
            className="rounded-[3.5rem] mt-12 mx-auto h-[336px]"
            width={320}
            src={image}
            alt={title}
          />
        </div>
        <div>
          <img
            className="rounded-[3.5rem] mt-12 mx-auto h-[336px]"
            width={320}
            src={image}
            alt={title}
          />
        </div>
      </Slider>
      <div className="pt-20 space-y-10">
        <h2 className="text-3xl font-bold">ESTADISTICAS</h2>
        <div className="space-y-10">
          <img src={image} alt="IMAGE STATUS" />
          <p className="text-justify">{descriptionStatus}</p>
        </div>
      </div>
    </main>
  );
};

ServiceBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  descriptionStatus: PropTypes.string.isRequired,
};
