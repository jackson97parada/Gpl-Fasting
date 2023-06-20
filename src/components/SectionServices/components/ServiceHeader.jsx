import PropTypes from "prop-types";

import { RxSlash } from "react-icons/rx";

export const ServiceHeader = ({ title }) => {
  return (
    <header className="bg-heroService bg-black/20 bg-cover w-auto h-[50vh] box-content">
      <div className="flex flex-col px-10 pt-24 space-y-20">
        <h1 className="text-5xl font-bold w-2/5">{title}</h1>
        <div className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium"
              >
                INICIO
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <RxSlash />
                <a href="/services" className="ml-1 text-sm font-medium ">
                  SERVICIOS
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <RxSlash />
                <span className="ml-1 text-sm font-medium">{title}</span>
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
