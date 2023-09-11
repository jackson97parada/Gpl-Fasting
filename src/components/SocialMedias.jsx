import { useState } from "react";

import { isMobile } from "react-device-detect";

import { FiPhone } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

import { motion } from "framer-motion";

export const SocialMedias = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="fixed bottom-[3rem] right-[2.5rem] z-50 w-12 rounded-lg bg-white px-2 shadow-lg"
        onMouseEnter={!isMobile ? () => setIsOpen(!isOpen) : undefined}
        onMouseLeave={() => setIsOpen(false)}
        onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
      >
        <button className="h-10">
          {isOpen ? (
            <svg
              className="h-8 w-8 text-[#191f40]"
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
            <BsWhatsapp className=" h-8 w-8 text-[#04c4d9]" />
          )}
        </button>
        <div
          className={`[&>a]:social-medias flex flex-col space-y-2 pb-[3px] text-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="tel:+573002682513" target="_blank" rel="noopener noreferrer">
            <FiPhone className="text-3xl text-[#04c4d9] transition-all hover:text-green-500" />
          </a>
          <a
            href="https://www.instagram.com/gpl1fasting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-[35px] text-[#04c4d9] transition-all hover:text-[#ef444c]" />
          </a>
          <a
            href="https://wa.me/+573002682513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="text-[33px] text-[#04c4d9] transition-all hover:text-green-500" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
