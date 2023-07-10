import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { settings } from "../";
import { Card } from "./components/Card";
import { ServiceDetail } from "./components/ServiceDetail";

export const SectionServices = () => {
  return (
    <section
      id="servicios"
      className="bg-[#101010] lg:pt-36 py-24 pb-32 px-6 lg:px-10"
    >
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
        {ServiceDetail.map(({ id, data }) => (
          <Card
            key={id}
            imgService={data.imgService}
            serviceTitle={data.title}
            serviceSubtitle={data.subTitle}
          />
        ))}
      </Slider>
      <hr className="border border-[#d63953] w-16 rotate-90 relative left-[40%] top-32" />
    </section>
  );
};
