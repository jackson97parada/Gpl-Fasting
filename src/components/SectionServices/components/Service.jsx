import { useParams } from "react-router-dom";

import { Navbar, Footer, settings } from "../../";
import Slider from "react-slick";
import { ServiceDetail } from "./ServiceDetail";

import { RxSlash } from "react-icons/rx";

export const Service = () => {
  const { serviceId } = useParams();
  const thisService = ServiceDetail.find(
    (service) => service.data.title === serviceId
  );

  return (
    <section className="mt-20 container w-full max-w-[1380px] mx-auto">
      <Navbar />
      <main>
        <header className="bg-heroService bg-black/20 bg-cover w-auto h-[91vh] lg:h-[580px] box-content">
          <div className="flex flex-col px-10 lg:px-20 pt-52 space-y-20">
            <h1 className="text-5xl lg:text-[51px] lg:text-black lg:leading-tight font-bold w-[20%]">
              {thisService.data.subTitle}
            </h1>
            <div className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="/Gpl-Fasting/"
                    className="inline-flex items-center text-[#c43953] text-base font-medium"
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <div className="flex items-center text-[#c43953]">
                    <RxSlash />
                    <h1 className="ml-1 text-base text-[#c43953] font-medium ">
                      SERVICIOS
                    </h1>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center text-[#c43953]">
                    <RxSlash />
                    <span className="ml-1 text-base text-black font-medium">
                      {thisService.data.subTitle}
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </header>
        <main className="px-10 lg:px-20 py-20 space-y-10">
          <h1 className="text-4xl lg:text-3xl text-[#82bede] lg:text-black font-bold">
            {thisService.data.subTitle}
          </h1>
          <p className="lg:text-sm text-justify font-light">
            {thisService.data.description}
          </p>
          <div className="lg:flex lg:flex-col-reverse">
            <Slider {...settings}>
              {ServiceDetail.map(({ id, data }) => (
                <div key={id}>
                  <img
                    className="rounded-[3.5rem] mt-12 mb-8 mx-auto h-[336px] shadow-xl"
                    width={320}
                    src={data.imageDetail}
                    alt={thisService.data.title}
                  />
                </div>
              ))}
            </Slider>
            <div className="pt-32 lg:pt-0 space-y-10">
              <h2 className="text-3xl text-[#c43953] lg:text-[28px] text-center font-bold">
                ESTADISTICAS
              </h2>
              <div className="space-y-10 lg:space-y-0 lg:flex lg:justify-center lg:gap-32">
                <img
                  src={thisService.data.imageStatus}
                  alt="IMAGE STATUS"
                  className="h-[100px] mx-auto lg:mx-0"
                />
                <p className="text-justify lg:text-sm lg:w-2/4 font-light">
                  {thisService.data.descriptionStatus}
                </p>
              </div>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </section>
  );
};
