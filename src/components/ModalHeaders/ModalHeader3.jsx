import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

import {
  ilustracion36,
  ilustracion37,
  logoBg,
} from "../../assets/ilustraciones";

const variants = {
  hidden: { opacity: 0, y: "-20%", transition: { duration: 2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "100%", transition: { duration: 2 } },
};

export const ModalHeader3 = () => {
  const [btnModal, setBtnModal] = useState(false);

  const handleModal = () => {
    setBtnModal(!btnModal);
  };

  const closeModal = () => {
    setBtnModal(true);
  };

  return (
    <div className="relative">
      {/* FONDO OSCURO */}
      {!btnModal && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={closeModal}
        />
      )}
      {/* MODAL */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`absolute -left-8 bottom-[-350px] z-50 w-[90vw] rounded-[50px] bg-white shadow-xl md:left-[-950px] md:w-[1300px] ${
          btnModal ? "hidden" : "block"
        }`}
      >
        {/* HEADER MODAL*/}
        <header className="flex items-center justify-between py-4">
          <h1 className="pl-6 text-lg font-bold text-[#024873] md:pl-8 md:text-2xl">
            Actuemos contra la obesidad
          </h1>
          <button className="pr-8 text-4xl" onClick={handleModal}>
            <CgClose />
          </button>
        </header>
        {/* MAIN MODAL*/}
        <main className="items-center p-6 py-14 md:flex md:pl-28 md:pr-10">
          <div className="h-[60vh] space-y-10 overflow-scroll md:relative md:h-auto md:overflow-hidden">
            {/* 1 */}
            <div className="items-center justify-between gap-10 md:flex">
              <p className="text-center text-[13px] font-medium text-[#191f40] md:w-[1010px] md:text-[15px]">
                La obesidad se encuentra relacionada con la depresión, la baja
                autoestima, disminución de la productividad, trastornos de la
                alimentación y con una INADECUADA
                <span className="rounded-lg bg-[#b2edf3] p-1">
                  CALIDAD DE VIDA.
                </span>
              </p>
              <img
                className="mx-auto md:relative md:mx-0 md:w-[300px]"
                src={ilustracion36}
                alt=""
              />
            </div>
            {/* 2 */}
            <div className="items-center gap-4 md:flex md:space-x-20">
              <p className="text-center text-[13px] font-medium text-[#191f40] md:relative md:top-10 md:w-[1010px] md:text-[15px]">
                Se estima que entre 30 y 70 % de las mujeres mayores de 30 años
                <span className="rounded-lg bg-[#b2edf3] p-1">
                  expresan inconformidad
                </span>{" "}
                con su peso corporal.
              </p>
              <img
                className="mx-auto md:relative md:top-10 md:w-[300px]"
                src={ilustracion37}
                alt=""
              />
            </div>
          </div>
          {/* DIV IMG */}
          <div className="hidden w-[70%] md:block">
            <img className="opacity-10 md:w-[1000px]" src={logoBg} alt="" />
          </div>
        </main>
        {/* FOOTER MODAL*/}
        <footer className="h-14 border-t-2 border-[#464b66] md:mt-16"></footer>
      </motion.div>
    </div>
  );
};
