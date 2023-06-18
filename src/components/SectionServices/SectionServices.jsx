import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { ServicesDetails } from "./ServicesDetails";

export const SectionServices = () => {
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

  return (
    <section id="SERVICIOS" className="bg-[#101010] py-24 pb-32 px-6">
      <div className="text-center space-y-8">
        <div className="text-start space-y-5">
          <h1 className="text-3xl text-white font-bold">SERVICIOS</h1>
          <h2 className="text-xs text-[#d63953] font-bold">
            TRABAJAMOS CONTIGO
          </h2>
        </div>

        <button className="border-4 border-[#d63953] rounded-lg px-24 py-3 text-xl text-white font-bold hover:bg-[#d63953] hover:shadow-2xl transition">
          VER TODOS
        </button>
      </div>

      <Slider {...settings}>
        {ServicesDetails.map(({ id, data }) => (
          <div key={id}>
            <img
              className="rounded-[3.5rem] mt-12 mx-auto h-[336px]"
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
