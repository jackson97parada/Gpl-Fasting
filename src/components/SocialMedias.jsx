import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export const SocialMedias = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-[3rem] right-[2.5rem] bg-white shadow-lg px-2 rounded-lg z-50">
      <button className="h-10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            className="w-8 h-8 relative left-1 text-red-500"
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
            className="w-8 h-8 text-red-500"
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
      <div
        className={`flex flex-col pb-2 [&>a]:social-medias text-center space-y-3 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="tel:+30012213432"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#29a71a]"
        >
          <IoCall />
        </a>
        <a
          href="https://www.instagram.com/nombredeusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-500 to-pink-500"
        >
          <BsInstagram />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#29a71a]"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};
