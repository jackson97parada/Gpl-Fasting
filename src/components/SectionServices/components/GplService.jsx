import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import { settings } from "../..";

import { useState } from "react";

import { Graph } from "./Graph";

import { FaAngleDoubleDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import {
  gpl1,
  gpl2,
  gpl3,
  gpl4,
  gpl5,
  gpl6,
} from "../../../assets/imagesServices";

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
      description: `De los pacientes al terminar el programa tienen los niveles de azúcar en sangre, colesterol y triglicéridos en los niveles adecuados
      `,
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

const imagesSlider = [
  {
    id: 1,
    data: {
      img: gpl1,
    },
  },
  {
    id: 2,
    data: {
      img: gpl2,
    },
  },
  {
    id: 3,
    data: {
      img: gpl3,
    },
  },
  {
    id: 4,
    data: {
      img: gpl4,
    },
  },
  {
    id: 5,
    data: {
      img: gpl5,
    },
  },
  {
    id: 6,
    data: {
      img: gpl6,
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
  hidden: { opacity: 0, y: "-20%", transition: { duration: 2 } },
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
    <div className="font-futura md:mb-6 md:mt-14">
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
                className="-z-10 mx-auto mt-12 h-[310px] w-auto rounded-[3.5rem] object-fill md:h-[370px] md:object-cover lg:mt-14"
                src={data.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </section>

      <main className="mx-6 py-10 font-futuraLigth md:mx-32 md:py-20">
        <section>
          <div>
            <h1 className="pb-8 text-center font-futura text-2xl font-bold text-[#024873] md:pb-4 md:text-start">
              GPL 1
            </h1>
            <p className="text-justify text-xl font-light leading-6">
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
                <h1 className=" pb-4 pl-6 font-futura text-2xl font-bold text-[#024873]">
                  GPL 1
                </h1>
                <button className="mb-4 mr-6 text-3xl" onClick={handleBtnModal}>
                  <GrClose />
                </button>
              </header>
              <p className="p-6 text-justify text-lg font-light">
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
          <h1 className="text-center font-futura text-[26px] font-bold text-[#024873]">
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
                <h1 className=" pb-4 pl-8 font-futura text-2xl text-[#024873]">
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
                  <img
                    className="mx-auto md:w-[300px]"
                    src={ilustracion8}
                    alt=""
                  />
                  <h1 className=" text-center font-futura font-bold text-[#04c4d9] ">
                    “La mejor dieta del mundo es la que puedes hacer“
                  </h1>
                </div>
                <div className=" text-center">
                  <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
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
                  <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
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
                  <img
                    className="mx-auto my-6 md:my-0 md:w-[300px]"
                    src={ilustracion9}
                    alt=""
                  />
                  <h1 className="text-center font-futura font-bold text-[#04c4d9] ">
                    “No usar la tecnología es una estupidez”
                  </h1>
                </div>
              </div>
              <div className="mx-6 mt-6 flex flex-col md:block">
                <div className="order-2 md:order-none">
                  <img
                    className="mx-auto my-6 md:my-0 md:w-[300px]"
                    src={ilustracion10}
                    alt=""
                  />
                  <h1 className="text-center font-futura font-bold text-[#04c4d9] ">
                    “Estamos programados genéticamente para comer 8 horas al día
                    y movilizarnos 10 km diarios “
                  </h1>
                </div>
                <div className="order-1 text-center md:order-none">
                  <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
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
                  <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
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
                  <img
                    className="mx-auto my-6 md:my-0 md:w-[300px]"
                    src={ilustracion11}
                    alt=""
                  />
                  <h1 className=" pb-6 text-center font-futura font-bold text-[#04c4d9] md:pb-0 ">
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
                <h1 className="w-[300px] text-center font-futura font-bold text-[#04c4d9] lg:pt-6 ">
                  “La mejor dieta del mundo es la que puedes hacer“
                </h1>
              </div>
              <div className="w-[50%] text-center">
                <h1 className="pb-10 font-futura text-xl font-bold text-[#024873] ">
                  AYUNO INTERMITENTE
                </h1>
                <p className=" text-justify text-lg font-light leading-5 lg:mx-auto lg:w-[80%]">
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
                <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
                  TECNOLOGÍA FARMACÉUTICA
                </h1>
                <p className=" text-justify text-lg font-light leading-5 lg:mx-auto lg:w-[80%]">
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
                <h1 className="w-56 text-center font-futura font-bold text-[#04c4d9] lg:pt-6 ">
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
                <h1 className="w-[320px] text-center font-futura font-bold text-[#04c4d9] lg:pt-6 ">
                  “Estamos programados genéticamente para comer 8 horas al día y
                  movilizarnos 10 km diarios “
                </h1>
              </div>
              <div className="w-[50%] text-center ">
                <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
                  ACTIVIDAD FÍSICA
                </h1>
                <p className=" text-justify text-lg font-light leading-5 lg:mx-auto lg:w-[80%]">
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
                <h1 className="py-10 font-futura text-xl font-bold text-[#024873] ">
                  RESPIRAR Y BALANCE INTERIOR YOGA
                </h1>
                <p className=" text-justify text-lg font-light leading-5 lg:mx-auto lg:w-[80%]">
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
                <h1 className="w-56 text-center font-futura font-bold text-[#04c4d9] lg:pt-6 ">
                  “El yoga no son poses, es una filosofía de vida “
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr className="mx-auto mb-14 w-40 border" />

      <footer className="mx-6 pb-10 md:mx-32 md:mb-24 md:py-10 md:pb-0">
        <section>
          <h1 className=" pb-12 text-center text-2xl font-bold text-[#024873] md:pl-8">
            EFECTOS DEL AYUNO INTERMITENTE EN TU SALUD Y RALENTIZACÍON DEL
            ENVEJECIMIENTO
          </h1>
          <p className="text-justify font-futuraLigth text-lg font-light ">
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
            className="relative z-50 md:absolute"
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
              <main className="px-6 pt-8">
                <p className="h-[600px] overflow-scroll pb-4 text-justify font-futuraLigth text-lg font-light md:h-[350px]">
                  Según Weindruch y Sohal en un artículo de 1997 en el Journal,
                  la reducción de la disponibilidad de alimentos a lo largo de
                  la vida (restricción calórica) tiene efectos notables sobre el
                  envejecimiento y la vida útil de los animales. Los autores
                  propusieron que los beneficios para la salud de la restricción
                  calórica resultan de una reducción pasiva en la producción de
                  radicales libres de oxígeno dañinos. Debido a que los roedores
                  con restricción calórica generalmente consumen toda su
                  asignación diaria de alimentos unas pocas horas después de su
                  provisión, tienen un período de ayuno diario de hasta 20
                  horas, durante el cual ocurre la cetogénesis. Desde entonces,
                  se han realizado cientos de estudios en animales y decenas de
                  estudios clínicos de regímenes controlados de ayuno
                  intermitente en los que el cambio metabólico de glucosa
                  derivada del hígado a cetonas derivadas de células adiposas se
                  produce diariamente o varios días a la semana. Aunque la
                  magnitud del efecto del ayuno intermitente sobre la extensión
                  de la vida es variable (influenciada por el sexo, la dieta y
                  los factores genéticos), los estudios en ratones y primates no
                  humanos muestran efectos consistentes de la restricción
                  calórica en el período de salud.
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
