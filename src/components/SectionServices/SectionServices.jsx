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
      className="bg-[#024873] lg:pt-32 py-24 pb-32 px-6 lg:px-10 lg:ps-16"
    >
      <div className="text-center space-y-8 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
        <div className="text-start space-y-5">
          <h1 className="text-3xl lg:text-[40px] text-white font-extrabold">
            SERVICIOS
          </h1>
          <h2 className="text-xs lg:text-base text-white font-bold">
            ¿Estás listo para transformar tu vida?
          </h2>
        </div>
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

      <hr className="border-2 border-[#0378a6] w-16 rotate-90 relative left-[45%] top-32" />
    </section>
  );
};
