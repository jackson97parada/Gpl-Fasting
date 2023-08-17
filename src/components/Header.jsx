import {
  ilustracion1,
  ilustracion3,
  ilustracion4,
  ilustracion38,
} from "../assets/ilustraciones";
import { FaAngleDoubleDown } from "react-icons/fa";
import { ModalHeader1, ModalHeader2, ModalHeader3 } from "./ModalHeaders";
import { useState } from "react";

export const Header = () => {
  const [viewModal1, setViewModal1] = useState(false);
  const [viewModal2, setViewModal2] = useState(false);
  const [viewModal3, setViewModal3] = useState(false);

  const handleModal1 = () => {
    setViewModal1(!viewModal1);
  };

  const handleModal2 = () => {
    setViewModal2(!viewModal2);
  };

  const handleModal3 = () => {
    setViewModal3(!viewModal3);
  };

  return (
    <div className="pb-10 pt-32 lg:pt-48" id="inicio">
      <hr className="relative left-6 top-4 z-10 w-16 rounded-full border-2 border-[#0378a6] md:left-10" />
      <hr className="relative left-[45%] top-[120.7rem] z-10 w-16 rotate-90 rounded-full border-[2.5px] border-[#0378a6] lg:left-[48%] lg:top-[1315px]" />
      <div className="lg:mx-32 lg:mb-32 lg:flex">
        <div className="z-30 text-center lg:px-10 lg:text-start ">
          <h1 className="max-w-[630px] px-6 pb-16 pt-10 text-center font-avantGarde text-[35px] font-medium leading-10 text-[#191f40] lg:mt-20 lg:px-0 lg:pr-40 lg:pt-0 lg:text-start lg:text-[50px] lg:leading-tight">
            CONVIERTETE EN LO QUE SUEÑAS!
          </h1>
          <a
            href="https://wa.me/+3001221432"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-4 border-[#024873] px-24 py-4 font-futura text-xl font-bold text-[#024873] transition duration-500 hover:bg-[#024873] hover:text-white hover:shadow-2xl lg:px-6 lg:text-4xl"
          >
            HABLEMOS!
          </a>
        </div>
        <img
          className="hidden w-[350px] lg:block lg:w-[400px]"
          src={ilustracion1}
        />
      </div>

      <h1 className="mt-32 text-center font-avantGarde text-4xl font-light text-[#191f40] md:pb-14 lg:mt-0">
        ¿SABIAS QUE?
      </h1>
      <div className="[&>div]:div-card relative bottom-[80px] mt-44 space-y-10 px-6 font-futura lg:mt-0 lg:flex lg:space-y-0 lg:px-0 lg:pt-20 [&>div>h1]:text-2xl [&>div>h1]:font-bold">
        <div className="space-y-4 text-center">
          <img
            className="mx-auto w-[195px] md:h-[190px]"
            src={ilustracion38}
            alt=""
          />
          <p className="text-xs font-bold text-[#024873] md:text-sm">
            El azúcar ya se considera una droga por su adicción, daños y el
            síndrome de abstinencia que provoca
          </p>
          <button
            onClick={handleModal1}
            className="mx-auto flex items-center gap-2 rounded-xl bg-[#024873] px-10 py-2 text-xs font-bold text-white"
          >
            <FaAngleDoubleDown /> Aprende más
          </button>
          {viewModal1 && <ModalHeader1 />}
        </div>

        <div className="space-y-4 text-center">
          <img className="mx-auto w-[190px]" src={ilustracion3} alt="" />
          <p className="text-xs font-bold text-[#024873] md:text-sm">
            Mujeres con perímetro abdominal mayor a 70 cm y hombre mayor a 80 cm
            están en sobrepeso.
          </p>
          <button
            onClick={handleModal2}
            className="mx-auto flex items-center gap-2 rounded-xl bg-[#024873] px-10 py-2 text-xs font-bold text-white"
          >
            <FaAngleDoubleDown /> Aprende más
          </button>
          {viewModal2 && <ModalHeader2 />}
        </div>

        <div className="space-y-4 text-center">
          <img
            className="mx-auto w-[170px] md:h-[190px]"
            src={ilustracion4}
            alt=""
          />
          <p className="text-xs font-bold text-[#024873] md:text-sm">
            Se estima que entre 50 y 70% de las mujeres mayores de 30 años
            expresan inconformidad con su peso corporal.
          </p>
          <button
            onClick={handleModal3}
            className="mx-auto flex items-center gap-2 rounded-xl bg-[#024873] px-10 py-2 text-xs font-bold text-white"
          >
            <FaAngleDoubleDown /> Aprende más
          </button>
          {viewModal3 && <ModalHeader3 />}
        </div>
      </div>
      <h2 className="mb-10 text-center font-avantGarde text-lg text-[#024873] md:text-xl lg:mb-32 lg:pt-6 lg:text-[27px] lg:text-[#0378a6]">
        ¡CUIDA DE TU CUERPO ES EL ÚNICO LUGAR QUE TIENES PARA VIVIR!
      </h2>
    </div>
  );
};
