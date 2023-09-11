import { FaAngleDoubleDown } from "react-icons/fa";
import {
  ilustracion20,
  ilustracion21,
  ilustracion22,
  ilustracion23,
  ilustracion24,
  ilustracion25,
  ilustracion26,
  ilustracion27,
  ilustracion28,
  ilustracion29,
  ilustracion30,
} from "../../../assets/ilustraciones";
import { useState } from "react";

export const SueroService = () => {
  const [btnModal, setBtnModal] = useState(false);

  const handleModal = () => {
    setBtnModal(!btnModal);
  };

  return (
    <section>
      {/* HEADER */}
      <header>
        <h1 className="my-10 text-center text-[28px] font-bold text-[#024873]">
          BENEFICIOS DE LA SUEROTERAPIA
        </h1>
        <img
          className="mx-auto w-auto lg:w-[400px]"
          src={ilustracion20}
          alt=""
        />
        {/* LISTS */}
        <div className="mx-6 mt-14 md:mx-32 md:flex md:justify-between md:gap-24">
          <ul className="space-y-2 pb-2 text-[17px] font-medium text-[#024873] md:space-y-6 md:pb-0 lg:w-[450px] lg:list-disc">
            <li>
              Técnicas de aplicación: terapia Heel autorregulación intravenosa
              directa , terapia Heel I.V, biopuntura, homeosiniatría,
              mesoterapia y segmento metamérica.
            </li>
            <li>Tratamiento individualizado.</li>
            <li>Rápida eficacia.</li>
            <li>Administración por vías aprobadas.</li>
          </ul>
          <ul className="space-y-2 text-[17px] font-medium text-[#024873] md:space-y-6 lg:w-[450px] lg:list-disc">
            <li>
              Mayor satisfacción y adherencia del paciente al recibir un
              tratamiento inmediato, personalizado y de rápida respuesta.
            </li>
            <li>
              Optimiza la salud desde la prevención hasta el abordaje de una
              patología.
            </li>
            <li>Acción y sinergia de los medicamentos.</li>
          </ul>
        </div>
        <hr className="mx-auto my-14 w-40 border border-[#d8e6e8] " />
        <h1 className="my-10 text-center text-[28px] font-bold text-[#024873]">
          SUEROTERAPIA
        </h1>
        <p className="mx-6 text-justify font-light md:mx-32 md:text-start">
          La sueroterapia consiste en pasar medicamentos biorreguladores,
          vitaminas u oligoelementos, por vía intravenosa mediante un suero de
          solución salina, a goteo lento. Mediante una cita de valoración
          (presencial o virtual), el médico determina el tipo de suero y el
          número de sesiones que requiere el paciente.
        </p>
        <br />
        <br />
        <h1 className="text-center font-medium text-[#024873]">
          Contraindicaciones de las terapias con suero:
        </h1>
        <h2 className="mx-5 text-center text-sm font-medium text-[#0cc4d9] md:mx-0 lg:text-base">
          Pacientes anticoagulados y pacientes con discrasias sanguíneas.
        </h2>
        <br />
        <br />
        <h1 className="mx-8 text-center font-medium text-[#024873] md:mx-0">
          Conoce ya nuestra nueva guía de Sueros Heel y disfruta de los
          múltiples beneficios:
        </h1>
        <h2 className="text-center text-sm font-medium text-[#0cc4d9] lg:text-base">
          Máxima calidad y seguridad para tus pacientes.
        </h2>
        <hr className="mx-auto my-14 w-40 border border-[#d8e6e8]" />
      </header>
      {/* MAIN */}
      <main className="mb-36 space-y-20 md:mx-52">
        <h1 className="mb-14 text-center text-2xl font-bold text-[#024873]">
          TIPOS DE TRATAMIENTOS
        </h1>
        {/* 1 */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img
            className="order-2 mt-4 md:order-none md:mt-0"
            src={ilustracion21}
            alt=""
          />
          <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
            <h1 className="text-2xl font-bold text-[#024873]">
              OSTEO FORTE <span className="text-[#04c4d9]">HELL</span>
            </h1>
            <p className=" mx-5 text-justify font-light lg:w-[400px]">
              Para pacientes con procesos inflamatorios a nivel osteoarticular,
              estimulando la regeneración de los tejidos y disminuyendo el
              deterioro progresivo.
            </p>
          </div>
        </div>
        <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
        {/* 2 */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
            <h1 className="text-2xl font-bold text-[#024873]">
              INMUNO <span className="text-[#04c4d9]">HELL</span>
            </h1>
            <p className=" mx-5 text-justify font-light lg:w-[400px]">
              Este suero está diseñado para estimular el sistema inmune y
              mejorar la respuesta de las defensas del cuerpo frente a diversas
              infecciones respiratorias agudas. <br />
              Se recomienda en todo tipo de pacientes que buscan fortalecer su
              sistema inmune ante cualquier infección o patología.
            </p>
          </div>
          <img
            className="order-2 mt-4 hidden md:order-none md:mt-0 md:flex"
            src={ilustracion22}
            alt=""
          />
        </div>
        <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />

        {/* ONLY MOBILE BUTTON AND MODAL */}
        <button
          onClick={handleModal}
          className="mx-auto flex items-center gap-2 rounded-xl bg-[#024873] px-[23vw] py-1.5 font-bold text-white md:hidden"
        >
          <FaAngleDoubleDown /> Continuar leyendo
        </button>

        <div
          className={`space-y-20 ${
            btnModal ? "block md:hidden" : "hidden md:block"
          }`}
        >
          {/* 3 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img
              className="order-2 mt-4 w-[300px] md:order-none md:mt-0"
              src={ilustracion23}
              alt=""
            />
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                VITAL <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className=" mx-5 text-justify font-light lg:w-[400px]">
                Para el tratamiento de pacientes con síntomas asociados a
                fatiga, alteración del estado anímico, agotamiento y debilidad
                ocasionados por estilos de vida inadecuados que alteran las
                funciones de las diferentes redes biológicas del cuerpo. <br />
                Se recomienda en todo tipo de pacientes que buscan fortalecer su
                sistema inmune ante cualquier infección o patología.
              </p>
            </div>
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
          {/* 4 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                GASTRO <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className=" mx-5 text-justify font-light lg:w-[400px]">
                Biorregulación de la red gastrointestinal que mejora síntomas
                como síndrome de intestino irritable, gastroenteritis y
                dispepsia, recuperando las barrerasde la mucosa.
              </p>
            </div>
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion24}
              alt=""
            />
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
          {/* 5 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion25}
              alt=""
            />
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                METABOL <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className=" mx-5 text-justify font-light lg:w-[400px]">
                Biorregulador y estimulante metabólico profundo en las
                diferentes redes, ayudando a controlar la obesidad,
                dislipidemias e hígado graso.
              </p>
            </div>
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
          {/* 6 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                POST INFECCIÓN VIRAL{" "}
                <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className="mx-5  text-justify font-light lg:w-[400px]">
                Indicado para pacientes que han presentado infecciones de origen
                viral y necesitan fortalecimiento de la respuesta inmune para
                así disminuir las consecuencias posteriores a la infección.
              </p>
            </div>
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion26}
              alt=""
            />
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
          {/* 7 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion27}
              alt=""
            />
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                DETOX <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className="mx-5  text-justify font-light lg:w-[400px]">
                Para el manejo en esquema preventivo o tratamiento para
                pacientes que requieran eliminar cargas tóxicas de su organismo,
                estimulando los mecanismos fisiológicos de detoxificación.
              </p>
            </div>
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />
          {/* 8 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                HORMO <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className="mx-5  text-justify font-light lg:w-[400px]">
                Tratamiento en esquema preventivo o tratamiento para pacientes
                que requieran apoyar el adecuado funcionamiento del eje hormonal
              </p>
            </div>
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion28}
              alt=""
            />
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block" />
          {/* 9 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion29}
              alt=""
            />
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                DERMO <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className="mx-5  text-justify font-light lg:w-[400px]">
                Tratamiento ideal para cuidado y mantenimiento de la piel,
                ayudando en el proceso de inflamación, regeneración y
                cicatrización de la misma.
              </p>
            </div>
          </div>
          <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block" />
          {/* 10 */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="order-1 space-y-5 text-center md:order-none lg:space-y-3">
              <h1 className="text-2xl font-bold text-[#024873]">
                ATLETAS <span className="text-[#04c4d9]">HELL</span>
              </h1>
              <p className="mx-5  text-justify font-light lg:w-[400px]">
                Tratamiento para personas que les gusta ejercitarse y mantenerse
                activas; estimula el rendimiento físico y previene las posibles
                lesiones osteomusculares.
              </p>
            </div>
            <img
              className="order-2 mt-4 md:order-none md:mt-0"
              src={ilustracion30}
              alt=""
            />
          </div>
        </div>
      </main>
      <hr className="relative mx-auto w-14 rotate-90 rounded-full border-2 border-[#bfd6d9]" />
    </section>
  );
};
