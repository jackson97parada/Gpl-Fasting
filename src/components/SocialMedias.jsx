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
        className="fixed bottom-[3rem] right-[2.5rem] z-50 rounded-lg bg-white px-2 shadow-lg"
        onMouseEnter={!isMobile ? () => setIsOpen(!isOpen) : undefined}
        onMouseLeave={() => setIsOpen(false)}
        onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
      >
        <button className="h-10">
          {isOpen ? (
            <svg
              className="relative left-1 h-8 w-8 text-[rgb(2,28,115)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={isOpen ? () => setIsOpen(false) : undefined}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <BsWhatsapp className="h-8 w-8 text-[#04c4d9]" />
          )}
        </button>
        <div
          className={`[&>a]:social-medias flex flex-col space-y-3 pb-2 text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="tel:+30012213432"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#04c4d9]"
          >
            <IoCall />
          </a>
          <a
            href="https://www.instagram.com/gpl1fasting/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#04c4d9]"
          >
            <BsInstagram />
          </a>
          <a
            className="cursor-pointer bg-[#04c4d9]"
            onClick={() => setIsWOpen(!isWOpen)}
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
      {/* Windown Whatsapp */}
      <div
        className={`bottom-[6rem] right-[2.5rem] ${
          isWOpen ? "fixed" : "hidden"
        }`}
      >
        <header className="flex items-center justify-between rounded-t-xl bg-[#3a3a3a] p-2.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <BsWhatsapp className="text-2xl text-white" />
            WhatsApp
          </div>
          <AiFillCloseCircle
            className="cursor-pointer text-lg text-white"
            onClick={() => setIsWOpen(!isWOpen)}
          />
        </header>
        <section>
          <figure>
            <img src={imageChat} />
          </figure>
        </section>
        <footer className="flex justify-end rounded-b-xl bg-[#f8f8f8]">
          <a
            href="https://wa.me/+3001221432"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2 mr-1 flex items-center gap-3 rounded-full bg-[#3a3a3a] p-3 px-3.5 text-xs font-semibold text-white"
          >
            Hablemos
            <IoSendOutline className="text-2xl text-white" />
          </a>
        </footer>
      </div>
    </div>
  );
};
