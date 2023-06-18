import PropTypes from "prop-types";

import { RxSlash } from "react-icons/rx";

export const ServiceHeader = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
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
    </header>
  );
};

ServiceHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
