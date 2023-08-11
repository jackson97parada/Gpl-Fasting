import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import {
  ilustracion31,
  ilustracion32,
  ilustracion33,
  logoBg,
} from "../../assets/ilustraciones";

const variants = {
  hidden: { opacity: 0, y: "-30%", transition: { duration: 2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "100%", transition: { duration: 2 } },
};

export const ModalHeader1 = () => {
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
      className={`relative bottom-[340px] right-9 z-50 w-[90vw] rounded-[50px] bg-white shadow-xl md:right-11 md:h-auto md:w-[1300px] ${
        btnModal ? "hidden" : "block"
      }`}
    >
      {/* HEADER MODAL*/}
      <header className="flex items-center justify-between border-b-2 border-[#464b66] py-4">
        <h1 className="pl-8 text-2xl font-bold text-[#024873]">Azucar</h1>
        <button className="pr-8 text-3xl" onClick={handleModal}>
          <GrClose />
        </button>
      </header>
      {/* MAIN MODAL*/}
      <main className="items-center gap-10 p-6 py-14 md:flex md:pl-28 md:pr-10">
        <div className="h-[60vh] space-y-10 overflow-scroll md:h-auto md:w-[60%] md:overflow-hidden">
          {/* 1 */}
          <div className="items-center justify-between gap-20 md:flex">
            <p className="text-center text-[15px] text-[#191f40] md:w-[340px]">
              El día de hoy un niño de 8 años ya se comió todo{" "}
              <span className="rounded-lg bg-[#b2edf3] pb-1">
                el azúcar que comió su abuelo en toda su vida
              </span>
            </p>
            <img
              className="mx-auto md:mx-0 md:w-60"
              src={ilustracion31}
              alt=""
            />
          </div>
          {/* 2 */}
          <div className="items-center justify-between gap-20 md:flex">
            <p className="pb-10 text-justify text-[15px] font-medium text-[#191f40] md:w-[330px] md:pb-0">
              Las bebidas azucaradas son la principal fuente de azúcares.{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                6 de cada 10 muertes causadas
              </span>{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                por el azúcar se atribuyen a su consumo
              </span>
            </p>
            <img
              className="mx-auto md:mx-0 md:mr-10 md:w-44"
              src={ilustracion32}
              alt=""
            />
          </div>
          {/* 3 */}
          <div className="items-center justify-between gap-20 md:flex">
            <p className="pb-10 text-center text-[15px] font-medium text-[#191f40] md:w-[296.8px] md:pb-0">
              Actualmente se consume en promedio más de 22 cucharadas al día,{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                no hay ingesta{" "}
              </span>
              <span className="rounded-lg bg-[#b2edf3] p-1">
                diaria recomendada
              </span>
            </p>
            <img
              className="mx-auto md:mx-0 md:mr-4 md:w-44"
              src={ilustracion33}
              alt=""
            />
          </div>
        </div>
        {/* DIV IMG */}
        <div className="hidden w-[40%] md:block">
          <img className="opacity-10 md:w-[1000px] " src={logoBg} alt="" />
        </div>
      </main>
      {/* FOOTER MODAL*/}
      <footer className="h-14 border-t-2 border-[#464b66]"></footer>
    </motion.div>
  );
};
