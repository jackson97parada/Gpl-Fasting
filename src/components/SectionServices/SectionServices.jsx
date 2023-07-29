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
      className="bg-[#024873] px-6 py-24 pb-32 lg:px-10 lg:ps-16 lg:pt-32"
    >
      <div className="space-y-8 text-center lg:flex lg:items-center lg:justify-between lg:space-y-0">
        <div className="space-y-5 pb-6 text-center lg:mx-32 lg:text-start">
          <h1 className="text-3xl font-extrabold text-white lg:text-[40px]">
            SERVICIOS
          </h1>
          <h2 className="text-sm font-bold text-white lg:text-base">
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

      <hr className="relative left-[40%] top-32 w-16 rotate-90 border-2 border-[#0378a6] lg:left-[45%]" />
    </section>
  );
};
