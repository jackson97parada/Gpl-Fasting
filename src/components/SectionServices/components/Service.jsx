import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import { Navbar, Footer /* settings */ } from "../../";
// import Slider from "react-slick";
import { ServiceDetail } from "./ServiceDetail";

import { RxSlash } from "react-icons/rx";

export const Service = () => {
  const { serviceId } = useParams();
  const thisService = ServiceDetail.find(
    (service) => service.data.title === serviceId
  );

  return (
    <section className="container mx-auto mt-20 w-full max-w-[1380px]">
      <Navbar />
      <hr className="relative left-10 top-[140px] w-14 border-[2.5px] border-[#0378a6] lg:left-[80px] lg:block" />
      <main>
        <header className="box-content h-[91vh] w-auto bg-black/20 bg-heroService bg-cover lg:h-[580px]">
          <div className="flex flex-col space-y-20 px-10 pt-52 lg:px-20">
            <h1 className="text-4xl font-bold text-white lg:text-[51px] lg:leading-tight">
              {thisService.data.subTitle}
            </h1>
            <div className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="/Gpl-Fasting/"
                    className="inline-flex items-center text-base font-medium text-[#04c4d9]"
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <div className="flex items-center text-white">
                    <RxSlash />
                    <h1 className="ml-1 text-base font-medium text-[#04c4d9] ">
                      SERVICIOS
                    </h1>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center text-white">
                    <RxSlash />
                    <span className="ml-1 text-base font-medium text-white">
                      {thisService.data.subTitle}
                    </span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </header>

        {/* SECTION GRAPHS */}
        <section>
          {/* SERVICIOS INDEPENDIENTES */}
          {thisService.data.body}
        </section>
      </main>
      <Footer />
    </section>
  );
};

Service.propTypes = {
  graph: PropTypes.string,
  descriptionGraph: PropTypes.string,
};
