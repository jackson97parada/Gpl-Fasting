import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

import { ilustracion1 } from "../../assets/ilustraciones";

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
      className={`relative bottom-[340px] right-[500px] z-50 w-[1300px] rounded-[50px] bg-white shadow-xl ${
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
      <main className="flex items-center gap-10 py-14 pl-28 pr-10">
        <div className="w-[60%] space-y-6">
          {/* 1 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[310px] text-center text-sm font-medium text-[#191f40]">
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
            <img className="w-60" src={ilustracion1} alt="" />
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[45%] text-justify text-sm font-medium text-[#191f40]">
              <span className="rounded-lg bg-[#b2edf3] p-1">
                Cada año mueren 2.8 millones de personas
              </span>{" "}
              en el mundo por obesidad y/o las enfermedades que provoca.
            </p>
            <img
              className="relative left-20 top-10 w-64"
              src={ilustracion1}
              alt=""
            />
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between gap-20">
            <p className="w-[296.8px] text-center text-sm font-medium text-[#191f40]">
              El numero de personas con sobrepeso en el mundo se ha duplicado en
              los ultimos 30 años, lo que hace que mas de mil millones de
              personas hoy en dia sufran de obesidad
            </p>
          </div>
        </div>
        {/* DIV IMG */}
        <div className="w-[40%]">
          <img src={ilustracion1} alt="" />
        </div>
      </main>
      {/* FOOTER MODAL*/}
      <footer className="mt-16 h-14 border-t-2 border-[#464b66]">
        <h1 className="relative bottom-16 text-3xl font-bold text-[#191f40]">
          ¿QUIERES SER PARTE DE LA ESTADISTICA?
        </h1>
      </footer>
    </motion.div>
  );
};
