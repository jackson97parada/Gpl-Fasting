import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { ServicesDetails } from "./ServicesDetails";

const settings = {
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: "10px",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "-80px",
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "-0px",
      },
    },
  ],
};

export const SectionServices = () => {
  return (
    <section id="SERVICIOS" className="bg-[#101010] py-24 pb-32 px-6 lg:px-10">
      <div className="text-center space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
        <div className="text-start space-y-5">
          <h1 className="text-3xl lg:text-4xl text-white font-bold">
            SERVICIOS
          </h1>
          <h2 className="text-xs lg:text-base text-[#d63953] font-bold">
            TRABAJAMOS CONTIGO
          </h2>
        </div>

        <button className="border-4 border-[#d63953] rounded-lg px-24 lg:px-4 py-3 lg:py-1 text-xl lg:text-2xl text-white font-bold hover:bg-[#d63953] hover:shadow-lg hover:shadow-gray-600 transition">
          Ver todos
        </button>
      </div>

      <Slider {...settings}>
        {ServicesDetails.map(({ id, data }) => (
          <div key={id}>
            <img
              className="rounded-[3.5rem] mt-12 lg:mt-14 mx-auto lg:w-[370px] h-[370px]"
              width={320}
              src={data.imgService}
              alt={data.title}
            />
          </div>
        ))}
      </Slider>
      <hr className="border border-[#d63953] w-16 rotate-90 relative left-[40%] top-32" />
    </section>
  );
};
