import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import { settings } from "../..";

import { Graph } from "./Graph";
import { ilustracion12, ilustracion13 } from "../../../assets/ilustraciones";
import {
  laser1,
  laser2,
  laser3,
  laser4,
  laser5,
} from "../../../assets/imagesServices";

const LipolaserDetails = [
  {
    id: 1,
    data: {
      percentaje: "100%",
      description: "De los pacientes no requieren de postoperatorio",
    },
  },
  {
    id: 2,
    data: {
      percentaje: "90%",
      description:
        "De los pacientes usan este procedimiento para eliminar “los gorditos” que no pudieron eliminar ni con ejercicio ni con dietas",
    },
  },
  {
    id: 3,
    data: {
      percentaje: "100%",
      description:
        "De los pacientes afirman que el procedimiento es rápido y no doloroso",
    },
  },
  {
    id: 4,
    data: {
      percentaje: "80%",
      description:
        "De los pacientes afirman que lo que más les gustó es que los resultados son naturales: “no parece que me hubiera operado”",
    },
  },
];

const imagesSlider = [
  {
    id: 1,
    data: {
      img: laser1,
    },
  },
  {
    id: 2,
    data: {
      img: laser2,
    },
  },
  {
    id: 3,
    data: {
      img: laser3,
    },
  },
  {
    id: 4,
    data: {
      img: laser4,
    },
  },
  {
    id: 5,
    data: {
      img: laser5,
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
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const LipolaserService = () => {
  return (
    <div className="mb-6 mt-14 font-futura">
      {/* SLIDER MOBILE */}
      <header className="md:hidden">
        <Slider {...settingsOff}>
          {LipolaserDetails.map(({ id, data }) => (
            <Graph
              key={id}
              percentaje={data.percentaje}
              description={data.description}
            />
          ))}
        </Slider>
      </header>

      <header className="mx-32 hidden grid-cols-2 gap-y-28 pb-40 md:grid">
        {LipolaserDetails.map(({ id, data }) => (
          <Graph
            key={id}
            percentaje={data.percentaje}
            description={data.description}
          />
        ))}
      </header>

      <hr className="relative left-[650px] top-[4px] hidden w-14 rotate-90 rounded-full border-2 border-[#bfd6d9] md:block " />

      <section className="mt-20 bg-[#024873] pb-20 md:mt-0 md:pb-20">
        <h1 className="pt-20 text-center text-2xl font-bold text-white">
          NUESTROS PROCESOS
        </h1>
        <Slider {...settings}>
          {imagesSlider.map(({ id, data }) => (
            <div key={id} className="px-6">
              <img
                className="-z-10 mx-auto mt-12 h-[370px] w-auto rounded-[3.5rem] object-cover lg:mt-14"
                src={data.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </section>

      <main className="mx-6 py-10 md:mx-32 md:py-20">
        <h1 className="text-center text-2xl font-bold text-[#024873] md:text-start ">
          LASER
        </h1>
        <p className="py-8 text-justify font-futuraLigth text-xl font-light">
          El láser es una intervención usada para la eliminación de grasa
          localizada en distintas partes del cuerpo, se extrae aproximadamente
          un litro de grasa por zona del cuerpo a trabajar, comúnmente llamado
          lipólisis láser. Este es un procedimiento de cabina de 20 minutos a 2
          horas, dependiendo de las áreas a tratar, mínimamente invasivo, se
          puede aplicar con anestesia local, con o sin sedación, y no requiere
          hospitalización, por lo que puedes volver a casa en el mismo día tras
          un breve periodo de observación, además no necesita de post
          operatorios.
        </p>
        <h2 className="text-center text-xl font-bold text-[#024873] lg:pb-8 ">
          Algunas ventajas de este procedimiento son:
        </h2>
        <img
          className="mx-auto h-[400px] md:h-[550px] lg:mb-8"
          src={ilustracion12}
          alt="IMG"
        />
        <div className="md:flex [&>ul]:mx-auto [&>ul]:space-y-5 [&>ul]:text-justify [&>ul]:font-futuraLigth [&>ul]:text-xl [&>ul]:font-bold [&>ul]:leading-6 md:[&>ul]:w-[380px] md:[&>ul]:list-disc ">
          <ul>
            <li>
              La recuperación es rápida y se pueden retomar las actividades
              diarias en poco tiempo.
            </li>
            <li>
              Es un procedimiento poco traumático, puede presentar mínimas
              molestias, inflamaciones, dolores o hematomas.
            </li>
            <li>
              Poca pérdida de sangre y los tejidos se man- tienen sin daños.
            </li>
          </ul>
          <ul>
            <li>Consigue la retracción de la piel (evita la flacidez).</li>
            <li>
              Promueve la generación de nuevas fibras de colágeno por lo que
              mejora la firmeza de la piel.
            </li>
            <li>Es un procedimiento corto, sin incapacidad y sin dolor.</li>
          </ul>
        </div>
        <hr className="mx-auto my-14 w-40 border" />
        <p className="pb-14 text-justify font-futuraLigth text-xl font-light leading-6 ">
          Para este procedimiento es indispensable el uso de faja de compresión
          espumas y tabla que deberá ser usada de tres a cuatro semanas, pero en
          ocasiones es común que su uso se extienda hasta tres meses. Las
          espumas y la tabla generalmente son molestas, rascan, acaloran,
          duelen, incomodan, ¡pero es solo durante un mes!
        </p>
        <h3 className="text-center text-2xl font-bold text-[#024873]">
          Zonas corporales que pueden ser tratadas
        </h3>
        <section className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="order-2 flex flex-col gap-4 md:order-none md:gap-20 [&>ul]:text-xl [&>ul]:font-bold [&>ul]:text-[#024873] md:[&>ul]:space-y-2 ">
            <ul>
              <li>Abdomen.</li>
              <li>Marcación.</li>
              <li>Oblicuo.</li>
            </ul>
            <ul>
              <li>Proyección de la cintura.</li>
              <li>Gordito del brasier.</li>
              <li>Entalle de la cintura.</li>
            </ul>
          </div>
          <div>
            <img
              className="order-1 w-[500px]  md:order-none lg:m-14"
              src={ilustracion13}
              alt="IMG"
            />
          </div>
          <div className="order-3 flex flex-col gap-4 md:order-none md:gap-20 [&>ul]:text-xl [&>ul]:font-bold [&>ul]:text-[#024873] md:[&>ul]:space-y-2 ">
            <ul>
              <li>Polo superior del glúteo.</li>
              <li>Papada.</li>
              <li>Espalda.</li>
            </ul>
            <ul>
              <li>Piernas.</li>
              <li>Brazos.</li>
              <li>Muslos o chaparrera.</li>
            </ul>
          </div>
        </section>
        <p className="mt-16 text-justify text-xl font-bold text-[#024873] md:mt-10 md:text-center ">
          No es una cirugía para bajar de peso, es un recurso para moldear la
          figura corporal, mejorar la silueta y lograr las proporciones ideales
          de cada persona.
        </p>
      </main>

      <hr className="relative left-[650px] top-[25px] hidden w-16 rotate-90 rounded-full border-2 border-[#bfd6d9] md:block " />
    </div>
  );
};
