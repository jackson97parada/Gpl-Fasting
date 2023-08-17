import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

import {
  ilustracion34,
  ilustracion35,
  logoBg,
} from "../../assets/ilustraciones";

const variants = {
  hidden: { opacity: 0, y: "-20%", transition: { duration: 2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "100%", transition: { duration: 2 } },
};

export const ModalHeader2 = () => {
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
      className={`relative bottom-[340px] right-9 z-50 w-[90vw] rounded-[50px] bg-white shadow-xl md:right-[500px] md:w-[1300px] ${
        btnModal ? "hidden" : "block"
      }`}
    >
      {/* HEADER MODAL*/}
      <header className="flex items-center justify-between border-b-2 border-[#464b66] py-4">
        <h1 className="pl-6 text-lg font-bold text-[#024873] md:pl-8 md:text-2xl">
          Actuemos contra la obesidad
        </h1>
        <button className="pr-8 text-4xl" onClick={handleModal}>
          <CgClose />
        </button>
      </header>
      {/* MAIN MODAL*/}
      <main className="items-center gap-10 p-6 py-14 md:flex md:pl-28 md:pr-10">
        <div className="h-[60vh] space-y-10 overflow-scroll md:h-auto md:w-[60%] md:overflow-hidden">
          {/* 1 */}
          <div className="items-center justify-between gap-12 md:flex">
            <p className="text-center text-[13px] text-[#191f40] md:w-[360px] md:text-[15px]">
              Por cada 15 kilos extra de peso aumenta el{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                riesgo de muerte temprana en un 30 %.
              </span>{" "}
              <br />
              <br />
              <span className="rounded-lg pb-1">
                Los niños que tienen un padre con obesidad tienen entre 3 y 4
                veces la probabilidad de ser obesos y de continuar con obesidad
                en la vida adulta.
              </span>
            </p>
            <img
              className="mx-auto md:relative md:left-14 md:mx-0 md:w-[300px]"
              src={ilustracion34}
              alt=""
            />
          </div>
          {/* 2 */}
          <div className="items-center gap-10 md:flex">
            <p className="text-center text-[13px] font-medium text-[#191f40] md:relative md:bottom-24 md:w-full md:text-[15px]">
              <span className="rounded-lg bg-[#b2edf3] p-1">
                Cada año mueren 2.8 millones de personas
              </span>{" "}
              en el mundo por obesidad y/o las enfermedades que provoca.
            </p>
            <img
              className="mx-auto my-10 md:relative md:left-10 md:top-10 md:mx-0 md:my-0 md:w-[300px]"
              src={ilustracion35}
              alt=""
            />
          </div>
          {/* 3 */}
          <div className="items-center justify-between gap-20 md:flex">
            <p className="text-center text-[13px] font-medium text-[#191f40] md:relative md:bottom-28 md:left-5 md:w-[296.8px] md:text-[15px]">
              El numero de personas con sobrepeso en el mundo se ha duplicado en
              los ultimos 30 años, lo que hace que mas de mil millones de
              personas hoy en dia sufran de obesidad
            </p>
          </div>
        </div>
        {/* DIV IMG */}
        <div className="hidden w-[40%] md:block">
          <img className="opacity-10 md:w-[1000px]" src={logoBg} alt="" />
        </div>
      </main>
      {/* FOOTER MODAL*/}
      <footer className="h-14 border-t-2 border-[#464b66] md:mt-16">
        <h1 className="relative bottom-16 hidden text-3xl font-bold text-[#191f40] md:block">
          ¿QUIERES SER PARTE DE LA ESTADISTICA?
        </h1>
      </footer>
    </motion.div>
  );
};
