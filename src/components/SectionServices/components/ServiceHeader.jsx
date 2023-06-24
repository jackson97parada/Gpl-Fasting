import PropTypes from "prop-types";

import { RxSlash } from "react-icons/rx";

export const ServiceHeader = ({ title }) => {
  return (
    <header className="bg-heroService bg-black/20 bg-cover w-auto h-[50vh] lg:h-[580px] box-content">
      <div className="flex flex-col px-10 lg:px-20 pt-24 lg:pt-52 space-y-20">
        <h1 className="text-5xl lg:text-[51px] lg:text-black lg:leading-tight font-bold w-[20%]">
          {title}
        </h1>
        <div className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-[#c43953] text-base font-medium"
              >
                INICIO
              </a>
            </li>
            <li>
              <div className="flex items-center text-[#c43953]">
                <RxSlash />
                <a
                  href="/services"
                  className="ml-1 text-base text-[#c43953] font-medium "
                >
                  SERVICIOS
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center text-[#c43953]">
                <RxSlash />
                <span className="ml-1 text-base text-black font-medium">
                  {title}
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </header>
  );
};

ServiceHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
