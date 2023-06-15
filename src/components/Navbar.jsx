import { useState } from "react";

const links = ["INICIO", "SERVICIOS", "NOSOTROS", "CLIENTES", "CONTACTO"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6 pt-4">
      <menu className="flex flex-wrap justify-between items-center">
        <a href="#">LOGO</a>

        {/* MENU */}
        <button className="h-full" onClick={() => setIsOpen(!isOpen)}>
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
          className={`md:flex md:justify-between w-full space-y-8 md:space-y-0 md:pt-0 gap-10 transition-all duration-500 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul
            className={`w-full text-center space-y-8 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {links.map((link) => (
              <li key={link}>
                <a className="font-bold" href={link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </menu>
      <hr className="border border-[#d6395398] w-14 absolute top-20" />
    </nav>
  );
};
