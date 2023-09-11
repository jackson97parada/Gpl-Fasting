import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { createServiceRoute } from "../constants/routes";
import { ServiceDetail } from "./SectionServices/components/ServiceDetail";
import { logo } from "./../assets";

import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "INICIO" },
  {
    name: "SERVICIOS",
  },
  { name: "NOSOTROS" },
  { name: "TESTIMONIOS" },
  { name: "CONTACTO" },
];

const Service = ServiceDetail.map((service) => {
  service.data.subTitle;
});

const variants = {
  hidden: { opacity: 0, y: "-20%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: "20%", transition: { duration: 0.3 } },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleLeave = () => {
    setShowDropdown(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-[100vw] bg-white p-6 px-5 pt-4 font-futura shadow-lg lg:h-28">
      <menu className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between lg:h-[60px] lg:flex-nowrap">
        <HashLink
          to="/#inicio"
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <img className="relative w-28 lg:top-1 lg:w-40" src={logo} alt="" />
        </HashLink>

        {/* MENU */}
        <button className="h-full  lg:hidden" onClick={handleToggleOpen}>
          {isOpen ? (
            <svg
              className="h-10 w-10 text-black"
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
              className="h-10 w-10 text-black"
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              className={`w-full gap-10 space-y-8 md:flex md:justify-between md:space-y-0 md:pt-0 lg:w-auto ${
                isOpen ? "h-[100vh] max-h-[100vh]" : "max-h-0 lg:h-auto"
              }`}
              onExitComplete={() => setIsOpen(false)}
            >
              <ul
                className={`mt-10 w-full space-y-20 text-center text-[#191f40] md:mt-0 lg:flex lg:w-auto lg:gap-24 lg:space-y-0 ${
                  isOpen ? "block" : "hidden lg:block"
                }
            `}
              >
                {links.map(({ name }) => (
                  <li
                    key={name}
                    onMouseEnter={
                      name === "SERVICIOS" ? handleHover : undefined
                    }
                    onMouseLeave={
                      name === "SERVICIOS" ? handleLeave : undefined
                    }
                  >
                    <HashLink
                      className="border-[#04c4d9] pb-1 font-bold duration-75 hover:border-b-2"
                      to={`/#${name.toLowerCase()}`}
                      smooth
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                      onClick={handleNavLinkClick}
                    >
                      {name}
                    </HashLink>
                    {Service && Service.length > 0 && (
                      // DROPDOWN
                      <div className="md:absolute">
                        <ul
                          className={`dropdown relative mx-auto w-[200px] space-y-4 pt-4 lg:-top-1 lg:right-16 lg:rounded-3xl lg:bg-white lg:px-4 lg:py-5 lg:shadow-xl ${
                            showDropdown && name === "SERVICIOS"
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {ServiceDetail.map(({ id, data }) => (
                            <li
                              className="border-[#04c4d9] font-bold duration-75 md:block md:hover:border-b-2"
                              key={id}
                            >
                              <Link
                                to={createServiceRoute(data.title)}
                                onClick={handleNavLinkClick}
                              >
                                {data.subTitle}
                              </Link>
                            </li>
                          ))}
                          <li className="md:block md:border-[#04c4d9] md:hover:border-b-2">
                            <a
                              href="https://www.instagram.com/gpl1fasting/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className=" font-bold duration-75 "
                            >
                              POST OP
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`hidden w-full gap-10 space-y-8 md:flex md:justify-between md:space-y-0 md:pt-0 lg:w-auto ${
            isOpen ? "h-[100vh] max-h-[100vh]" : "max-h-0 lg:h-auto"
          }`}
        >
          <ul
            className={`mt-10 w-full space-y-20 text-center text-[#191f40] md:mt-0 lg:flex lg:w-auto lg:gap-24 lg:space-y-0 ${
              isOpen ? "block" : "hidden lg:block"
            }
            `}
          >
            {links.map(({ name }) => (
              <li
                key={name}
                onMouseEnter={name === "SERVICIOS" ? handleHover : undefined}
                onMouseLeave={name === "SERVICIOS" ? handleLeave : undefined}
              >
                <HashLink
                  className="border-[#04c4d9] pb-1 font-bold duration-75 hover:border-b-2"
                  to={`/#${name.toLowerCase()}`}
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  {name}
                </HashLink>
                {Service && Service.length > 0 && (
                  // DROPDOWN
                  <div className="absolute">
                    <ul
                      className={`dropdown w-[200px] lg:relative lg:-top-1 lg:right-16 lg:space-y-4 lg:rounded-3xl lg:bg-white lg:px-4 lg:py-5 lg:shadow-xl ${
                        showDropdown && name === "SERVICIOS"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {ServiceDetail.map(({ id, data }) => (
                        <li
                          className="border-[#04c4d9] font-bold duration-75 hover:border-b-2"
                          key={id}
                        >
                          <Link
                            to={createServiceRoute(data.title)}
                            onClick={handleLinkClick}
                          >
                            {data.subTitle}
                          </Link>
                        </li>
                      ))}
                      <li className="border-[#04c4d9] hover:border-b-2">
                        <a
                          href="https://www.instagram.com/gpl1fasting/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" font-bold duration-75 "
                        >
                          POST OP
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </menu>
    </nav>
  );
};
