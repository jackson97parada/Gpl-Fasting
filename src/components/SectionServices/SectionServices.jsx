import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { settings } from "../";
import { Card } from "./components/Card";
import { ServiceDetail } from "./components/ServiceDetail";

import { fifthservice } from "./../../assets/imagesServices";

export const SectionServices = () => {
  return (
    <section
      id="servicios"
      className="bg-[#024873] px-6 py-24 pb-32 lg:px-10 lg:ps-16 lg:pt-32"
    >
      <div className="space-y-8 text-center lg:flex lg:items-center lg:justify-between lg:space-y-0">
        <div className="space-y-5 pb-6 text-center font-futura lg:mx-32 lg:text-start">
          <h1 className="text-3xl font-extrabold text-white lg:text-[40px]">
            SERVICIOS
          </h1>
          <h2 className="font-bold text-white md:text-xl">
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
        <div className="duration-300 hover:translate-y-3">
          <a
            href="https://www.instagram.com/gpl1fasting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="-z-10 mx-auto mt-12 h-[370px] rounded-[3.5rem] brightness-50 duration-300 hover:shadow-lg hover:shadow-[#0378a6] lg:mt-14 lg:w-[370px]"
              width={320}
              src={fifthservice}
              alt="image-carrousel"
            />
            <h1 className="relative bottom-48 z-10 text-center text-2xl font-bold text-white">
              POST OP
            </h1>
          </a>
        </div>
      </Slider>

      <hr className="relative left-[45%] top-32 w-16 rotate-90 rounded-full border-2 border-[#0378a6] lg:left-[47%]" />
    </section>
  );
};
