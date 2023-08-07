import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import { settings } from "../..";

import { useState } from "react";

import { Graph } from "./Graph";

import { FaAngleDoubleDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { secondCard } from "../../../assets/cardsHeader";
import {
  ilustracion8,
  ilustracion9,
  ilustracion10,
  ilustracion11,
} from "../../../assets/ilustraciones";

import { motion } from "framer-motion";

const GplDetails = [
  {
    id: 1,
    data: {
      percentaje: "85%",
      description:
        "De los pacientes al terminar el programa tienen los niveles de azúcar en sangre, colesterol y triglicéridos en los niveles adecuados",
      title: "GPL 1",
      descriptionProgram: `El programa en el que podrás llegar a bajar hasta el 10% de tu peso, es decir, si pesas 120 kg en 26 días bajarás 12 kilos. Muchos pacientes con sobrepeso se vuelven escépticos frente a las posibles soluciones, mucho más cuando han recibido tratamientos o ayuda. Desconocen que al estar en sobrepeso por largos periodos sus cuerpos entran en un estado de inflamación crónica, sus cerebros perciben esto como un estado de supervivencia y bloquea cualquier cambio, ya que el cerebro considera que se debe gastar poca energía para sobrevivir. El equipo de GPL1 tomó esto como una razón suficiente para aceptar el reto de cambiar realidades y crear un tratamiento efectivo con resultados reales.
      
      El Programa GPL1, es el resultado de la labor observacional con cada paciente con desórdenes alimentarios y obesidad, en el que se estudia cada paciente individualmente para encontrar sus deficiencias, debilidades y lo que desencadena un mal funcionamiento en su cuerpo. El primer paso es solicitar exámenes médicos y en base a los resultados se diseña un plan de trabajo, que por lo general dura 30 días. El primer pilar y el más importante es llevar al paciente de manera natural y gradual a hacer AYUNO de 14, 16 y 18 horas, esta transición se hace con la ayuda de medicamentos para el control de la ansiedad, balancear los niveles de azúcar y grasas en la sangre, así mismo, un mínimo de actividad física, y dieta, pero POR NINGÚN MOTIVO AGUANTARÁS HAMBRE, ni vas se van a tener restricciones en el consumo de alimentos, ¡lo único que se prohíbe rotundamente es el azúcar!`,
    },
  },
  {
    id: 2,
    data: {
      percentaje: "99%",
      description:
        "De los pacientes al terminar el programa afirman sentirse más jóvenes y enérgicos",
    },
  },
  {
    id: 3,
    data: {
      percentaje: "90%",
      description:
        "De los pacientes al terminar el tratamiento está haciendo solo dos comidas diarias y ayunos de 14 a 16 horas con objetivos de reparación y ralentización del envejecimiento",
    },
  },
  {
    id: 4,
    data: {
      percentaje: "87%",
      description:
        "De los pacientes al terminar el programa tienen los niveles de azúcar en sangre, colesterol y triglicéridos en los niveles adecuados",
    },
  },
];

// const GplPilars = [
//   {
//     id: 1,
//     data: {
//       title: "AYUNO INTERMITENTE",
//       subtitle: "La mejor dieta del mundo es la que puedes hacer",
//       description:
//         "Tras años de análisis y estudios en humanos y animales, grupos multidisciplinarios en salud llegan a una conclu- sión clave en nutrición, obesidad, antienvejecimiento, longevidad y controles contra el cáncer. Conscientes de los desafíos alimentarios de los pacientes, utilizan técni- cas novedosas para garantizar dietas personalizadas y adecuadas para cada individuo.",
//     },
//   },
//   {
//     id: 2,
//     data: {
//       title: "TECNOLOGÍA FARMACÉUTICA",
//       subtitle: "No usar la tecnología es una estupidez",
//       description:
//         "Apoyados en los avances tecnológicos de la ciencia farmacológica estamos a la vanguardia de tratamientos médicos para pérdida de peso, control de la resistencia a la insulina, riesgo cardio vascular, hipertensión arterial y diabetes, logrando así un control metabólico rápido y efectivo que incentiva a continuar una sana vida a nuestros pacientes.",
//     },
//   },
//   {
//     id: 3,
//     data: {
//       title: "ACTIVIDAD FÍSICA",
//       subtitle:
//         "Estamos programados genéticamente para comer 8 horas al día y movilizarnos 10 km diarios",
//       description:
//         "Durante muchos años, los humanos se desplazaban largas distancias para obtener su alimento diario, lo que equilibraba los gastos energéticos con los consumidos. Sin embargo, con la llegada de la revolución agrícola hace 10.000 años, nuestra vida se volvió sedentaria y aumentó el consumo de alimentos, lo que ha llevado a un progresivo aumento de peso y a problemas de salud como obesidad, diabetes, hipertensión y riesgo cardiovascular, entre otros.",
//     },
//   },
//   {
//     id: 4,
//     data: {
//       title: "RESPIRAR Y BALANCE INTERIOR YOGA",
//       subtitle: "El yoga no son poses, es una filosofía de vida",
//       description:
//         "Regulación, disciplina, estabilidad, regulación de la energía vital, interiorización, concentración, meditación, iluminación. Encaminados en las prácticas ancestrales del yoga como vía segura hacia el autoconocimiento y realización, encontramos importante que conozcas los beneficios de estos 8 lineamientos que complementan nuestro programa y te ayudarán a tener una vida más amable.",
//     },
//   },
// ];

const imagesSlider = [
  {
    id: 1,
    data: {
      img: secondCard,
    },
  },
  {
    id: 2,
    data: {
      img: secondCard,
    },
  },
  {
    id: 3,
    data: {
      img: secondCard,
    },
  },
  {
    id: 4,
    data: {
      img: secondCard,
    },
  },
];

const settingsOff = {
  dots: true,
  customPaging: () => (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "#024873",
        margin: "0 5px",
      }}
    ></div>
  ),
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "-80px",
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "-0px",
      },
    },
  ],
};

const variants = {
  hidden: { opacity: 0, y: "-100%", transition: { duration: 2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const GplService = () => {
  const [btnModal, setBtnModal] = useState(true);
  const [btnModalTwo, setBtnModalTwo] = useState(true);
  const [btnModalMobile, setBtnModalMobile] = useState(true);

  const handleBtnModal = () => {
    setBtnModal(!btnModal);
  };

  const handleBtnModalTwo = () => {
    setBtnModalTwo(!btnModalTwo);
  };

  const handleBtnModalMobile = () => {
    setBtnModalMobile(!btnModalMobile);
  };

  return (
    <div className="md:mb-6 md:mt-14">
      {/* SLIDER MOBILE */}
      <header className="md:hidden">
        <Slider {...settingsOff}>
          {GplDetails.map(({ id, data }) => (
            <Graph
              key={id}
              percentaje={data.percentaje}
              description={data.description}
            />
          ))}
        </Slider>
      </header>

      <header className="hidden gap-y-40 pb-52 md:mx-32 md:grid md:grid-cols-2 md:gap-y-28">
        {GplDetails.map(({ id, data }) => (
          <Graph
            key={id}
            percentaje={data.percentaje}
            description={data.description}
          />
        ))}
      </header>

      <section className="mt-20 bg-[#024873] pb-20 md:mt-0 md:pb-20">
        <h1 className="pt-20 text-center text-2xl font-bold text-white">
          NUESTROS PROCESOS
        </h1>
        <Slider {...settings}>
          {imagesSlider.map(({ id, data }) => (
            <div key={id} className="px-6">
              <img
                className="-z-10 mx-auto mt-12 h-[370px] w-auto rounded-[3.5rem] md:w-[370px] lg:mt-14"
                src={data.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </section>

      <main className="mx-6 py-10 md:mx-32 md:py-20">
        <section>
          <div>
            <h1 className="pb-8 text-center text-2xl font-bold text-[#024873] md:pb-4 md:text-start">
              GPL 1
            </h1>
            <p className="text-justify text-lg font-light">
              El programa en el que podrás llegar a bajar hasta el 10% de tu
              peso, es decir, si pesas 120 kg en 26 días bajarás 12 kilos.
              Muchos pacientes con sobrepeso se vuelven escépticos frente a las
              posibles soluciones, mucho más cuando han recibido tratamientos o
              ayuda. Desconocen que al estar en sobrepeso por largos periodos
              sus cuerpos entran{" "}
              <span className="opacity-60">
                en un estado de inflamación crónica, sus cerebros perciben esto
                como un estado de supervivencia y bloquea cualquier{" "}
              </span>
              <span className="opacity-40">
                cambio, ya que el cerebro considera que se debe gastar poca
                energía para sobrevivir. El equipo de GPL1 tomó{" "}
              </span>
              <span className="opacity-20">
                esto como una razón suficiente para aceptar el reto de cambiar
                realidades y crear un tratamiento efectivo con resultados
                reales.
              </span>
            </p>
          </div>
          {/* MODAL */}
          <motion.div
            initial="hidden"
            animate={btnModal ? "hidden" : "visible"}
            variants={variants}
            className="relative md:absolute"
          >
            <div
              className={`relative right-[7px] z-30 w-[90vw] max-w-[1200px] rounded-[2.5rem] bg-white pt-5 shadow-2xl md:-right-[7px] md:bottom-64 md:w-[1100px] ${
                btnModal ? "hidden" : "block"
              }`}
            >
              <header className="flex items-center justify-between border-b-2 border-[#024873]">
                <h1 className=" pb-4 pl-6 text-2xl font-bold text-[#024873]">
                  GPL 1
                </h1>
                <button className="mb-4 mr-6 text-3xl" onClick={handleBtnModal}>
                  <GrClose />
                </button>
              </header>
              <p className="p-6 text-justify font-light">
                El programa en el que podrás llegar a bajar hasta el 10% de tu
                peso, es decir, si pesas 120 kg en 26 días bajarás 12 kilos.
                Muchos pacientes con sobrepeso se vuelven escépticos frente a
                las posibles soluciones, mucho más cuando han recibido
                tratamientos o ayuda. Desconocen que al estar en sobrepeso por
                largos periodos sus cuerpos entran en un estado de inflamación
                crónica, sus cerebros perciben esto como un estado de
                supervivencia y bloquea cual- quier cambio, ya que el cerebro
                considera que se debe gastar poca energía para sobrevivir. El
                equipo de GPL1 tomó esto como una razón suficiente para aceptar
                el reto de cambiar realidades y crear un tratamiento efectivo
                con re- sultados reales.
                <br />
                <br />
                El Programa GPL1, es el resultado de la labor observacional con
                cada paciente con desórdenes alimentarios y obe- sidad, en el
                que se estudia cada paciente individualmente para encontrar sus
                deficiencias, debilidades y lo que desencadena un mal
                funcionamiento en su cuerpo. El primer paso es solicitar
                exámenes médicos y en base a los resultados se diseña un plan de
                trabajo, que por lo general dura 30 días. El primer pilar y el
                más importante es llevar al paciente de manera natural y gradual
                a hacer AYUNO de 14, 16 y 18 horas, esta transición se hace con
                la ayuda de medicamentos para el control de la ansiedad,
                balancear los niveles de azúcar y grasas en la sangre, así
                mismo, un mínimo de actividad física, y dieta, pero POR NINGÚN
                MOTIVO AGUANTARÁS HAMBRE, ni vas se van a tener restricciones en
                el consumo de alimentos, ¡lo único que se prohíbe rotundamente
                es el azúcar!
              </p>
              <footer className="border-t-2 border-[#024873] pb-10 "></footer>
            </div>
          </motion.div>

          <button
            onClick={handleBtnModal}
            className="mx-auto my-6 flex items-center gap-2 rounded-full bg-[#024873] px-7 py-1.5 font-bold text-white"
          >
            <FaAngleDoubleDown /> Continuar leyendo
          </button>
        </section>
        <hr className="mx-auto my-14 w-40 border" />

        <section className="mx-10 md:mx-28">
          <h1 className="text-center text-[26px] font-bold text-[#024873]">
            PILARES
          </h1>
          <img className="my-10 md:hidden" src={ilustracion8} alt="" />

          <motion.div
            initial="hidden"
            animate={btnModalMobile ? "hidden" : "visible"}
            variants={variants}
            className="relative md:absolute md:hidden"
          >
            <div
              className={`relative right-11 z-30 w-[90vw] max-w-[1200px] rounded-[2.5rem] bg-white pt-5 shadow-2xl md:bottom-64 md:right-[52px] md:w-[1100px] ${
                btnModalMobile ? "hidden" : "block"
              }`}
            >
              <header className="flex items-center justify-between border-b-2 border-[#024873]">
                <h1 className=" pb-4 pl-8 text-2xl font-bold text-[#024873]">
                  PILARES
                </h1>
                <button
                  className="mb-4 mr-8 text-3xl"
                  onClick={handleBtnModalMobile}
                >
                  <GrClose />
                </button>
              </header>
              <div className="mx-6 mt-6">
                <div className="text-center">
                  <img className="w-[300px]" src={ilustracion8} alt="" />
                  <h1 className=" text-center font-bold text-[#04c4d9] ">
                    “La mejor dieta del mundo es la que puedes hacer“
                  </h1>
                </div>
                <div className=" text-center">
                  <h1 className="py-10 text-xl font-bold text-[#024873] ">
                    AYUNO INTERMITENTE
                  </h1>
                  <p className=" text-justify font-light">
                    Tras años de análisis y estudios en humanos y animales,
                    grupos multidisciplinarios en salud llegan a una conclu-
                    sión clave en nutrición, obesidad, antienvejecimiento,
                    longevidad y controles contra el cáncer. Conscientes de los
                    desafíos alimentarios de los pacientes, utilizan técni- cas
                    novedosas para garantizar dietas personalizadas y adecuadas
                    para cada individuo.
                  </p>
                </div>
              </div>
              <div className="mx-6 mt-6">
                <div className="text-center ">
                  <h1 className="py-10 text-xl font-bold text-[#024873] ">
                    TECNOLOGÍA FARMACÉUTICA
                  </h1>
                  <p className=" text-justify font-light">
                    Apoyados en los avances tecnológicos de la ciencia far-
                    macológica estamos a la vanguardia de tratamientos médicos
                    para pérdida de peso, control de la resistencia a la
                    insulina, riesgo cardio vascular, hipertensión arterial y
                    diabetes, logrando así un control metabólico rápido y
                    efectivo que incentiva a continuar una sana vida a nues-
                    tros pacientes.
                  </p>
                </div>
                <div>
                  <img className="w-[300px] " src={ilustracion8} alt="" />
                  <h1 className="text-center font-bold text-[#04c4d9] ">
                    “No usar la tecnología es una estupidez”
                  </h1>
                </div>
              </div>
              <div className="mx-6 mt-6">
                <div>
                  <img className="w-[300px] " src={ilustracion8} alt="" />
                  <h1 className="text-center font-bold text-[#04c4d9] ">
                    “Estamos programados genéticamente para comer 8 horas al día
                    y movilizarnos 10 km diarios “
                  </h1>
                </div>
                <div className="text-center ">
                  <h1 className="py-10 text-xl font-bold text-[#024873] ">
                    ACTIVIDAD FÍSICA
                  </h1>
                  <p className=" text-justify font-light">
                    Durante muchos años, los humanos se desplazaban largas
                    distancias para obtener su alimento diario, lo que
                    equilibraba los gastos energéticos con los consumidos. Sin
                    embargo, con la llegada de la revolución agrícola hace
                    10.000 años, nuestra vida se volvió sedentaria y aumentó el
                    consumo de alimentos, lo que ha llevado a un progresivo
                    aumento de peso y a problemas de salud como obesidad,
                    diabetes, hipertensión y riesgo cardio- vascular, entre
                    otros.
                  </p>
                </div>
              </div>
              <div className="mx-6 mt-6">
                <div className=" text-center ">
                  <h1 className="py-10 text-xl font-bold text-[#024873] ">
                    RESPIRAR Y BALANCE INTERIOR YOGA
                  </h1>
                  <p className=" text-justify font-light">
                    Regulación, disciplina, estabilidad, regulación de la
                    energía vital, interiorización, concentración, meditación,
                    iluminación. Encaminados en las prácticas ancestrales del
                    yoga como vía segura hacia el autoconocimiento y
                    realización, encontramos importante que conozcas los
                    beneficios de estos 8 lineamientos que complementan nuestro
                    programa y te ayudarán a tener una vida más amable.
                  </p>
                </div>
                <div>
                  <img className="w-[300px] " src={ilustracion8} alt="" />
                  <h1 className=" text-center font-bold text-[#04c4d9] ">
                    “El yoga no son poses, es una filosofía de vida “
                  </h1>
                </div>
              </div>
              <footer className="border-t-2 border-[#024873] pb-10 "></footer>
            </div>
          </motion.div>
          <button
            onClick={handleBtnModalMobile}
            className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-[#024873] px-7 py-1.5 font-bold text-white md:hidden"
          >
            <FaAngleDoubleDown /> Conocelos
          </button>

          <div className="hidden space-y-16 md:block">
            <div className="mt-6 flex items-center justify-between">
              <div className="text-center lg:pl-20">
                <img className="w-[300px]" src={ilustracion8} alt="" />
                <h1 className="w-[300px] text-center font-bold text-[#04c4d9] lg:pt-6 ">
                  “La mejor dieta del mundo es la que puedes hacer“
                </h1>
              </div>
              <div className="w-[50%] text-center ">
                <h1 className="pb-10 text-xl font-bold text-[#024873] ">
                  AYUNO INTERMITENTE
                </h1>
                <p className=" text-justify font-light leading-5 lg:mx-auto lg:w-[80%]">
                  Tras años de análisis y estudios en humanos y animales, grupos
                  multidisciplinarios en salud llegan a una conclu- sión clave
                  en nutrición, obesidad, antienvejecimiento, longevidad y
                  controles contra el cáncer. Conscientes de los desafíos
                  alimentarios de los pacientes, utilizan técni- cas novedosas
                  para garantizar dietas personalizadas y adecuadas para cada
                  individuo.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="w-[50%] text-center ">
                <h1 className="py-10 text-xl font-bold text-[#024873] ">
                  TECNOLOGÍA FARMACÉUTICA
                </h1>
                <p className=" text-justify font-light leading-5 lg:mx-auto lg:w-[80%]">
                  Apoyados en los avances tecnológicos de la ciencia far-
                  macológica estamos a la vanguardia de tratamientos médicos
                  para pérdida de peso, control de la resistencia a la insulina,
                  riesgo cardio vascular, hipertensión arterial y diabetes,
                  logrando así un control metabólico rápido y efectivo que
                  incentiva a continuar una sana vida a nues- tros pacientes.
                </p>
              </div>
              <div className="text-center lg:pr-20">
                <img className="w-[220px] " src={ilustracion9} alt="" />
                <h1 className="w-56 text-center font-bold text-[#04c4d9] lg:pt-6 ">
                  “No usar la tecnología es una estupidez”
                </h1>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-center lg:pl-20">
                <img
                  className="w-[220px] lg:ml-11"
                  src={ilustracion10}
                  alt=""
                />
                <h1 className="w-[320px] text-center font-bold text-[#04c4d9] lg:pt-6 ">
                  “Estamos programados genéticamente para comer 8 horas al día y
                  movilizarnos 10 km diarios “
                </h1>
              </div>
              <div className="w-[50%] text-center ">
                <h1 className="py-10 text-xl font-bold text-[#024873] ">
                  ACTIVIDAD FÍSICA
                </h1>
                <p className=" text-justify font-light leading-5 lg:mx-auto lg:w-[80%]">
                  Durante muchos años, los humanos se desplazaban largas
                  distancias para obtener su alimento diario, lo que equilibraba
                  los gastos energéticos con los consumidos. Sin embargo, con la
                  llegada de la revolución agrícola hace 10.000 años, nuestra
                  vida se volvió sedentaria y aumentó el consumo de alimentos,
                  lo que ha llevado a un progresivo aumento de peso y a
                  problemas de salud como obesidad, diabetes, hipertensión y
                  riesgo cardio- vascular, entre otros.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="w-[50%] text-center ">
                <h1 className="py-10 text-xl font-bold text-[#024873] ">
                  RESPIRAR Y BALANCE INTERIOR YOGA
                </h1>
                <p className=" text-justify font-light leading-5 lg:mx-auto lg:w-[80%]">
                  Regulación, disciplina, estabilidad, regulación de la energía
                  vital, interiorización, concentración, meditación,
                  iluminación. Encaminados en las prácticas ancestrales del yoga
                  como vía segura hacia el autoconocimiento y realización,
                  encontramos importante que conozcas los beneficios de estos 8
                  lineamientos que complementan nuestro programa y te ayudarán a
                  tener una vida más amable.
                </p>
              </div>
              <div className="text-center lg:pr-20">
                <img className="w-[250px] " src={ilustracion11} alt="" />
                <h1 className="w-56 text-center font-bold text-[#04c4d9] lg:pt-6 ">
                  “El yoga no son poses, es una filosofía de vida “
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr className="mx-auto mb-14 w-40 border" />

      <footer className="mx-6 py-10 md:mx-32 md:mb-24">
        <section>
          <h1 className=" pb-12 text-center text-2xl font-bold text-[#024873] md:pl-8">
            EFECTOS DEL AYUNO INTERMITENTE EN TU SALUD Y RALENTIZACÍON DEL
            ENVEJECIMIENTO
          </h1>
          <p className="text-justify font-light ">
            Según Weindruch y Sohal en un artículo de 1997 en el Journal, la
            reducción de la disponibilidad de alimentos a lo largo de la vida
            (restricción calórica) tiene efectos notables sobre el
            envejecimiento y la vida útil de los animales. Los autores
            propusieron
            <span className="opacity-60">
              que los beneficios para la salud de la restricción calórica
              resultan de una reducción pasiva en la producción de radicales
              libres de oxígeno dañinos.
            </span>
            <span className="opacity-40">
              Debido a que los roedores con restricción calórica generalmente
              consumen toda su asignación diaria de alimentos
            </span>
            <span className="opacity-20">
              unas pocas horas después de su provisión, tienen un período de
              ayuno diario de hasta 20 horas, durante el cual
            </span>
          </p>
          {/* MODAL */}
          <motion.div
            initial="hidden"
            animate={btnModalTwo ? "hidden" : "visible"}
            variants={variants}
            className="relative md:absolute"
          >
            <div
              className={`relative right-[60px] z-30 mx-14 w-[90vw] max-w-[1200px] rounded-[2.5rem] bg-white pt-5 shadow-2xl md:bottom-64 md:right-[52px] md:w-[1100px] ${
                btnModalTwo ? "hidden" : "block"
              }`}
            >
              <header className="flex items-center justify-between border-b-2 border-[#024873]">
                <h1 className=" pb-4 pl-6 text-2xl font-bold text-[#024873]">
                  EFECTOS DEL AYUNO
                </h1>
                <button
                  className="mb-4 mr-6 text-3xl"
                  onClick={handleBtnModalTwo}
                >
                  <GrClose />
                </button>
              </header>
              <main className=" px-6 pt-8">
                <p className="h-[600px] overflow-scroll pb-4 text-justify font-light md:h-[350px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, fugiat quibusdam! At eligendi quisquam fugiat,
                  animi, iste corporis veniam optio quod amet laborum corrupti
                  dignissimos doloremque, ut eos fuga provident tempora ipsum
                  vel eum cupiditate sapiente vero! Dolor sapiente quod,
                  repellat magni aperiam eligendi blanditiis excepturi officiis
                  sit distinctio? Itaque, nisi. Officia dolore sapiente quaerat
                  tenetur veniam pariatur modi eveniet provident recusandae
                  molestiae a tempore nisi quidem inventore hic ullam dolorum
                  libero, repellat error aliquid? Commodi, delectus explicabo!
                  Molestias est consequatur possimus amet aliquid debitis
                  aliquam unde expedita architecto, ducimus nemo doloribus ad
                  adipisci hic fugiat neque enim nihil incidunt harum. Laborum
                  enim numquam sunt, labore neque unde? Aliquid sequi deleniti
                  corporis incidunt ipsum! Dolores adipisci voluptatum quo
                  voluptatibus aperiam temporibus commodi laborum perspiciatis
                  voluptate officia nemo, dolore eligendi eveniet alias illum
                  nisi nobis, minima tenetur? Veritatis modi alias reprehenderit
                  dignissimos quos aut. Debitis totam perspiciatis inventore
                  porro magni odio alias sit corrupti veritatis incidunt ex,
                  officia vel illo delectus blanditiis aut maxime? Facere ut
                  totam, et dolor eveniet qui voluptates esse repellendus.
                  Veniam officia porro omnis. Vel accusamus exercitationem,
                  praesentium eum nobis et recusandae optio eos debitis est
                  vitae facere tempore ab libero, sequi pariatur dolor! Numquam
                  minima, veritatis similique modi tenetur labore dicta nemo
                  deserunt earum eum beatae provident cumque cum nostrum eos ad
                  voluptatum ea tempora nam officia repudiandae placeat
                  asperiores repellat? Eos illum facilis tempore atque dolorem
                  ex totam at. Quidem eius consequuntur dolorum minima, maxime
                  odit nam pariatur, culpa eveniet obcaecati qui explicabo sequi
                  amet. Odit quaerat sequi, veritatis fugit animi voluptatem
                  officia tempore mollitia quasi molestiae vel in, reiciendis
                  quibusdam commodi magnam nemo dolor alias voluptatibus unde!
                  Repellendus sequi aspernatur unde quo dolores ex neque
                  voluptatum, quasi nisi tenetur fuga placeat tempora voluptate,
                  laudantium dicta sunt voluptatem id nemo consequuntur
                  reprehenderit! Aliquid porro aliquam ratione minima
                  consequuntur quibusdam laboriosam, labore quia facere
                  explicabo voluptates sapiente odio aperiam culpa dolorum
                  commodi temporibus eligendi cupiditate repellat eius quas
                  dolor repellendus! Dignissimos ex culpa unde reprehenderit
                  mollitia non magni eos voluptas obcaecati totam, repudiandae
                  laudantium voluptatibus possimus ipsam, itaque necessitatibus
                  quod explicabo fugit eum? Laudantium obcaecati aliquam
                  molestiae iste, nemo amet accusamus nulla animi sunt possimus
                  voluptas, sit magnam libero quisquam, neque ab repudiandae
                  rem! Explicabo, itaque aut. Soluta, nemo quos voluptas
                  eligendi veritatis ipsum nisi voluptate, fuga totam quibusdam
                  cum sapiente labore laborum molestias ipsa ab optio delectus
                  fugiat dolore distinctio assumenda aperiam itaque
                  necessitatibus. Enim, labore quidem minus expedita sunt quod,
                  velit exercitationem consequatur natus ducimus eaque qui quis
                  ea, molestias vitae possimus omnis in nulla voluptatum ab ex
                  tempora voluptatem aut! Labore veniam illum suscipit id
                  deserunt incidunt, soluta porro! Sit harum modi odio animi
                  impedit nam, consequatur distinctio quasi repellendus sapiente
                  odit, ipsum vitae. Necessitatibus ratione recusandae maxime id
                  autem atque nisi quisquam culpa, cupiditate mollitia eaque
                  tempore maiores ab fuga architecto facilis. Delectus, ut
                  recusandae. Quasi deserunt quas, nemo libero deleniti enim
                  repellendus earum ipsa aut laborum possimus aspernatur
                  perferendis consequatur, inventore blanditiis magni illo amet
                  vitae maxime cumque quisquam dolor ab id a! Ullam excepturi
                  perferendis adipisci. Veniam ipsum magni, facilis ea fugit id
                  laboriosam, reiciendis commodi tempora possimus eveniet
                  consectetur obcaecati recusandae porro illo quis adipisci.
                  Laudantium nostrum vitae voluptatum debitis delectus ratione
                  temporibus quasi nam architecto facilis magni corrupti nulla
                  totam fuga tenetur, ex rerum rem nemo quos harum
                  necessitatibus sapiente. Officiis, molestias corporis mollitia
                  laudantium hic dolorem! Facilis, doloremque esse. Laborum
                  error molestias odit facere, voluptas rem nihil optio? A, at
                  nam, praesentium voluptatibus in quaerat magni, suscipit
                  aspernatur rem sunt repudiandae velit nostrum quisquam neque
                  cupiditate. Consequatur, culpa delectus excepturi quos
                  molestias dicta exercitationem aliquam vero officiis quidem et
                  veritatis error, voluptate cum ipsa voluptas architecto omnis.
                  Fugiat amet laboriosam ipsam obcaecati quasi tempora minus
                  quaerat perferendis ab quia nesciunt illo voluptates, hic, nam
                  pariatur tenetur dolor consequatur non quam repudiandae
                  debitis nostrum quis quidem. Natus ipsa at, laudantium modi
                  sunt nesciunt aliquam nobis ea nisi iste iure debitis dolores
                  porro! Dolorum maiores ex odio! Saepe labore delectus neque
                  cumque provident magni odit aperiam placeat, dolor voluptate
                  maxime vero veniam fuga officia ab modi. Ex quidem porro, odit
                  culpa ab natus deserunt eum vel dolore doloribus odio pariatur
                  quaerat deleniti unde nesciunt, aliquid dicta est? Esse
                  sapiente maiores nam amet ullam aliquid aliquam, laudantium
                  sed ratione! Harum deserunt cum fuga pariatur eos nulla
                  officiis animi laudantium tempora atque excepturi id quas
                  repudiandae delectus amet quos, possimus qui? Illo maiores
                  officiis cum commodi tempore aliquid? Fugit, aliquam dolor. Ea
                  accusantium nesciunt quidem nihil, obcaecati illum eligendi
                  soluta quisquam odio nam repellat deserunt maxime architecto
                  laboriosam cumque suscipit adipisci itaque, officia alias
                  autem. Consequuntur nostrum distinctio quas! Magni sint iusto
                  corporis quam quidem nemo, obcaecati eligendi mollitia
                  explicabo doloribus possimus minima harum aut placeat
                  repellendus quos iste quod in nam ex. Distinctio pariatur et,
                  tenetur suscipit vel mollitia enim. Voluptas quam inventore
                  itaque dignissimos ipsum iste odit iure cupiditate error
                  doloremque aperiam, cum blanditiis expedita consequuntur modi
                  ab numquam quisquam eos dicta nobis repellat molestias aliquid
                  eius! Doloribus, obcaecati aliquid laudantium provident optio
                  at sint veritatis incidunt eveniet nemo vitae ut eaque
                  aspernatur asperiores aperiam aut. Nesciunt laudantium
                  mollitia ut numquam soluta, ipsam necessitatibus, quas iste
                  sapiente recusandae natus minima odio praesentium ea sequi
                  unde tenetur! Fugit, mollitia? Earum in deserunt repellendus
                  sunt quibusdam reprehenderit a cum fugiat saepe dolores dolor
                  voluptate officiis natus dolore, tempora dignissimos vel
                  error, voluptatum debitis accusantium. Harum, facilis
                  voluptas? Unde molestias nemo possimus nobis debitis iure,
                  incidunt quos minima placeat, odit enim impedit nam voluptatum
                  quidem dolorum non quibusdam! Ullam, nemo! Unde molestiae
                  eveniet delectus nesciunt quo blanditiis, sint doloremque
                  natus magni, magnam eum incidunt odio, dolorem ab voluptatibus
                  consectetur quia quis soluta necessitatibus rerum itaque!
                  Magnam necessitatibus odit illo. Quas quaerat, magni, nostrum
                  voluptatibus unde nemo quam quod, aliquam numquam illum
                  perferendis natus eius officia dignissimos! Animi facere fuga
                  cupiditate nisi sit cum rerum quam nobis vel, mollitia eum.
                  Optio dolores quaerat tempora corrupti neque nam consequuntur,
                  repellat voluptas voluptatibus accusamus inventore iure vitae
                  nihil deleniti atque a rerum fugit saepe blanditiis?
                </p>
              </main>
              <footer className="border-t-2 border-[#024873] pb-10 "></footer>
            </div>
          </motion.div>
          <button
            onClick={handleBtnModalTwo}
            className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-[#024873] px-7 py-1.5 font-bold text-white"
          >
            <FaAngleDoubleDown /> Continuar leyendo
          </button>
        </section>
      </footer>
      <hr className="relative left-[650px] top-[25px] hidden w-14 rotate-90 rounded-full border-2 border-[#bfd6d9] md:block " />
    </div>
  );
};
