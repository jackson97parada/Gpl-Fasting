import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "INICIO" },
  {
    name: "SERVICIOS",
    services: ["GPL FASTING", "BELLEZA ESTETICA", "CUIDADO POST"],
  },
  { name: "NOSOTROS" },
  { name: "CLIENTES" },
  { name: "CONTACTO" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleLeave = () => {
    setShowDropdown(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] lg:h-28 z-50 shadow-lg p-6 pt-4">
      <menu className="flex flex-wrap lg:flex-nowrap justify-between items-center lg:h-[60px] mx-auto max-w-[1300px]">
        <a href="/Gpl-Fasting/">LOGO</a>

        {/* MENU */}
        <button className="h-full lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              className="w-10 h-10 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              data-collapse-toggle="navbar-default"
              type="button"
              aria-controls="navbar-default"
              aria-expanded="false"
              className="w-10 h-10 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* ==== */}
        <div
          className={`md:flex md:justify-between w-full lg:w-auto space-y-8 md:space-y-0 md:pt-0 gap-10 transition-all duration-500 ${
            isOpen ? "max-h-[500px]" : "max-h-0 lg:h-auto "
          }`}
        >
          <ul
            className={`w-full lg:w-auto lg:flex lg:gap-24 text-center space-y-8 lg:space-y-0 ${
              isOpen ? "block" : "hidden lg:block"
            }`}
          >
            {links.map(({ name, services }) => (
              <li
                key={name}
                onMouseEnter={name === "SERVICIOS" ? handleHover : undefined}
                onMouseLeave={name === "SERVICIOS" ? handleLeave : undefined}
              >
                <ScrollLink
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="font-bold cursor-pointer"
                  to={name}
                >
                  {name}
                </ScrollLink>
                {services && services.length > 0 && (
                  <ul
                    className={` lg:bg-white lg:rounded-3xl lg:absolute lg:top-[66px] lg:space-y-4 lg:right-[39.5%] lg:py-5 lg:px-4 lg:shadow-xl ${
                      showDropdown && name === "SERVICIOS" ? "block" : "hidden"
                    }`}
                  >
                    {services.map((servicio, index) => (
                      <li className="font-bold" key={index}>
                        <Link
                          to={`/Gpl-Fasting/Servicio/${index}`}
                          onClick={handleLinkClick}
                        >
                          <h1>{servicio}</h1>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </menu>
      <hr className="border border-[#d6395398] w-14 lg:hidden absolute top-20" />
    </nav>
  );
};
