import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import { ilustracion1 } from "../../assets/ilustraciones";

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
      className={`relative bottom-[340px] right-11 z-50 w-[1300px] rounded-[50px] bg-white shadow-xl ${
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
      <main className="flex items-center gap-10 py-14 pl-28 pr-10">
        <div className="w-[60%] space-y-10">
          {/* 1 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[310px] text-center text-sm font-medium text-[#191f40]">
              El día de hoy un niño de 8 años ya se comió todo{" "}
              <span className="rounded-lg bg-[#b2edf3] pb-1">
                el azúcar que comió su abuelo en toda su vida
              </span>
            </p>
            <img className="w-44" src={ilustracion1} alt="" />
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[45%] text-justify text-sm font-medium text-[#191f40]">
              Las bebidas azucaradas son la principal fuente de azúcares.{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                6 de cada 10 muertes causadas
              </span>{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                por el azúcar se atribuyen a su consumo
              </span>
            </p>
            <img className="w-44" src={ilustracion1} alt="" />
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[296.8px] text-center text-sm font-medium text-[#191f40]">
              Actualmente se consume en promedio más de 22 cucharadas al día,{" "}
              <span className="rounded-lg bg-[#b2edf3] p-1">
                no hay ingesta{" "}
              </span>
              <span className="rounded-lg bg-[#b2edf3] p-1">
                diaria recomendada
              </span>
            </p>
            <img className="w-44" src={ilustracion1} alt="" />
          </div>
        </div>
        {/* DIV IMG */}
        <div className="w-[40%]">
          <img src={ilustracion1} alt="" />
        </div>
      </main>
      {/* FOOTER MODAL*/}
      <footer className="h-14 border-t-2 border-[#464b66]"></footer>
    </motion.div>
  );
};
