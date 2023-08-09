import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
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

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`relative bottom-[340px] right-[950px] z-50 w-[1300px] rounded-[50px] bg-white shadow-xl ${
        btnModal ? "hidden" : "block"
      }`}
    >
      {/* HEADER MODAL*/}
      <header className="flex items-center justify-between border-b-2 border-[#464b66] py-4">
        <h1 className="pl-8 text-2xl font-bold text-[#024873]">
          Actuemos contra la obesidad
        </h1>
        <button className="pr-8 text-3xl" onClick={handleModal}>
          <GrClose />
        </button>
      </header>
      {/* MAIN MODAL*/}
      <main className="flex items-center gap-10 pl-28 pr-10 pt-14">
        <div className="w-[60%] space-y-6">
          {/* 1 */}
          <div className="flex items-center justify-between gap-10">
            <p className="w-[1010px] text-center text-[15px] font-medium text-[#191f40]">
              La obesidad se encuentra relacionada con la depresión, la baja
              autoestima, disminución de la productividad, trastornos de la
              alimentación y con una INADECUADA
              <span className="rounded-lg bg-[#b2edf3] p-1">
                CALIDAD DE VIDA.
              </span>
            </p>
            <img
              className="relative left-14 w-[300px]"
              src={ilustracion36}
              alt=""
            />
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between gap-10">
            <p className="relative top-10 w-[1010px] text-center text-[15px] font-medium text-[#191f40]">
              Se estima que entre 30 y 70 % de las mujeres mayores de 30 años
              <span className="rounded-lg bg-[#b2edf3] p-1">
                expresan inconformidad
              </span>{" "}
              con su peso corporal.
            </p>
            <img
              className="relative left-32 top-10 w-[300px]"
              src={ilustracion37}
              alt=""
            />
          </div>
        </div>
        {/* DIV IMG */}
        <div className="w-[40%]">
          <img className="opacity-10 md:w-[1000px]" src={logoBg} alt="" />
        </div>
      </main>
      {/* FOOTER MODAL*/}
      <footer className="mt-16 h-14 border-t-2 border-[#464b66]"></footer>
    </motion.div>
  );
};
