import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import { settings } from "../../";

import { Graph } from "./Graph";
import { firstImageBotox } from "../../../assets/imagesServices";
import { secondCard } from "../../../assets/cardsHeader";

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

export const LipolaserService = () => {
  return (
    <div className="mb-6 mt-14">
      <header className="mx-32 grid grid-cols-2 gap-y-28 pb-40">
        {LipolaserDetails.map(({ id, data }) => (
          <Graph
            key={id}
            percentaje={data.percentaje}
            description={data.description}
          />
        ))}
      </header>
      <hr className="relative left-[650px] top-[4px] w-14 rotate-90 rounded-full border-2 border-[#bfd6d9] " />

      <section className=" bg-[#024873] py-20">
        <h1 className="text-center text-2xl font-bold text-white">
          NUESTROS PROCESOS
        </h1>
        <Slider {...settings}>
          {imagesSlider.map(({ id, data }) => (
            <div key={id}>
              <img
                className="-z-10 mx-auto mt-12 h-[370px] w-[370px] rounded-[3.5rem] lg:mt-14"
                src={data.img}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </section>

      <main className="mx-32 py-20">
        <h1 className="text-2xl font-bold text-[#024873] ">LASER</h1>
        <p className="py-8 text-justify text-lg font-light">
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
        <h2 className="text-center text-xl font-bold text-[#024873] ">
          Algunas ventajas de este procedimiento son:
        </h2>
        <img className="mx-auto h-[550px]" src={firstImageBotox} alt="IMG" />
        <div className="flex [&>ul]:mx-auto [&>ul]:w-[380px] [&>ul]:list-disc [&>ul]:space-y-5 [&>ul]:text-justify [&>ul]:text-lg ">
          <ul>
            <li>
              La recuperación es rápida y se pueden reto- mar las actividades
              diarias en poco tiempo.
            </li>
            <li>
              Es un procedimiento poco traumático, puede presentar mínimas
              molestias, infla- maciones, dolores o hematomas.
            </li>
            <li>
              Poca pérdida de sangre y los tejidos se man- tienen sin daños.
            </li>
          </ul>
          <ul>
            <li>Consigue la retracción de la piel (evita la flaci- dez).</li>
            <li>
              Promueve la generación de nuevas fibras de colágeno por lo que
              mejora la firmeza de la piel.
            </li>
            <li>Es un procedimiento corto, sin incapacidad y sin dolor.</li>
          </ul>
        </div>
        <hr className="mx-auto my-14 w-40 border" />
        <p className="pb-14 text-justify text-lg font-light ">
          Para este procedimiento es indispensable el uso de faja de compresión
          espumas y tabla que deberá ser usada de tres a cuatro semanas, pero en
          ocasiones es común que su uso se extienda hasta tres meses. Las
          espumas y la tabla generalmente son molestas, rascan, acaloran,
          duelen, incomodan, ¡pero es solo durante un mes!
        </p>
        <h3 className="text-center text-2xl font-bold text-[#024873]">
          Zonas corporales que pueden ser tratadas
        </h3>
        <section className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-20 [&>ul]:space-y-2 [&>ul]:text-xl [&>ul]:font-bold [&>ul]:text-[#024873] ">
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
            <img className="w-[500px] " src={firstImageBotox} alt="IMG" />
          </div>
          <div className="flex flex-col gap-20 [&>ul]:space-y-2 [&>ul]:text-xl [&>ul]:font-bold [&>ul]:text-[#024873] ">
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
        <p className="mt-10 text-center text-xl font-bold text-[#024873] ">
          No es una cirugía para bajar de peso, es un recurso para moldear la
          figura corporal, mejorar la silueta y lograr las proporciones ideales
          de cada persona.
        </p>
      </main>
      <hr className="relative left-[650px] top-[25px] w-16 rotate-90 rounded-full border-2 border-[#bfd6d9] " />
    </div>
  );
};
