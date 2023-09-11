import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
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
        className={`fixed left-10 right-10 top-32 z-[1055] mx-auto h-[78vh] max-h-[900px] w-auto overflow-y-auto overflow-x-hidden rounded-[50px] bg-white shadow-xl outline-none md:left-auto md:right-auto md:-ml-11 md:w-[1300px] ${
          btnModal ? "hidden" : "block"
        }`}
      >
        {/* HEADER MODAL*/}
        <header className="flex items-center justify-between py-4">
          <h1 className="mx-auto pl-8 text-2xl font-bold text-[#024873]">
            Azucar
          </h1>
          <button className="pr-8 text-4xl" onClick={handleModal}>
            <CgClose />
          </button>
        </header>
        {/* MAIN MODAL*/}
        <main className="items-center gap-10 p-6 py-14 md:flex md:pl-28 md:pr-10">
          <div className="h-[60vh] space-y-10 overflow-scroll md:h-auto md:w-[60%] md:overflow-hidden">
            {/* 1 */}
            <div className="items-center gap-14 md:flex">
              <p className="text-center text-[15px] text-[#191f40] md:w-[360px]">
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
            <div className="items-center gap-14 md:flex">
              <p className="pb-10 text-justify text-[15px] font-medium text-[#191f40] md:w-[350px] md:pb-0">
                Las bebidas azucaradas son la principal fuente de azúcares.{" "}
                <span className="rounded-lg bg-[#b2edf3] p-1">
                  6 de cada 10 muertes causadas
                </span>{" "}
                <span className="rounded-lg border-white bg-[#b2edf3] p-1">
                  por el azúcar se atribuyen a su consumo
                </span>
              </p>
              <img
                className="mx-auto md:mx-0 md:ml-10 md:w-44"
                src={ilustracion32}
                alt=""
              />
            </div>
            {/* 3 */}
            <div className="items-center gap-14 md:flex">
              <p className="pb-10 text-center text-[15px] font-medium text-[#191f40] md:w-[330px] md:pb-0">
                Actualmente se consume en promedio más de 22 cucharadas al día,{" "}
                <span className="rounded-lg bg-[#b2edf3] p-1">
                  no hay ingesta{" "}
                </span>
                <span className="rounded-lg bg-[#b2edf3] p-1">
                  diaria recomendada
                </span>
              </p>
              <img
                className="mx-auto md:mx-0 md:ml-16 md:w-44"
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
    </div>
  );
};
