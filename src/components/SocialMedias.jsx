import { useState } from "react";

import { isMobile } from "react-device-detect";

import { IoCall, IoSendOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

import imageChat from "../assets/chat.png";

export const SocialMedias = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWOpen, setIsWOpen] = useState(false);
  return (
    <div>
      <div
        className="fixed bottom-[3rem] right-[2.5rem] bg-white shadow-lg px-2 rounded-lg z-50"
        onMouseEnter={!isMobile ? () => setIsOpen(!isOpen) : undefined}
        onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
      >
        <button className="h-10">
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
            <BsWhatsapp className="w-8 h-8 text-[#29a71a]" />
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
            href="https://www.instagram.com/gpl1fasting/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-pink-500"
          >
            <BsInstagram />
          </a>
          <a
            className="bg-[#29a71a] cursor-pointer"
            onClick={() => setIsWOpen(!isWOpen)}
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      {/* Windown Whatsapp */}
      <div
        className={`bottom-[3rem] right-[6.5rem] ${
          isWOpen ? "fixed" : "hidden"
        }`}
      >
        <header className="flex justify-between items-center bg-[#3a3a3a] p-2.5 rounded-t-xl">
          <div className="flex items-center gap-2 text-white text-sm font-semibold">
            <BsWhatsapp className="text-white text-2xl" />
            WhatsApp
          </div>
          <AiFillCloseCircle
            className="text-white text-lg cursor-pointer"
            onClick={() => setIsWOpen(!isWOpen)}
          />
        </header>
        <section>
          <figure>
            <img src={imageChat} />
          </figure>
        </section>
        <footer className="bg-[#f8f8f8] flex justify-end rounded-b-xl">
          <a
            href="https://wa.me/+3001221432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full p-3 px-3.5 my-2 mr-1 text-xs text-white font-semibold bg-[#3a3a3a]"
          >
            Hablemos
            <IoSendOutline className="text-white text-2xl" />
          </a>
        </footer>
      </div>
    </div>
  );
};
