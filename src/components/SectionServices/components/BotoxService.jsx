import Slider from "react-slick";
import "../../slick.css";
import "../../slick-theme.css";
import {
  ilustracion14,
  ilustracion15,
  ilustracion16,
  ilustracion17,
  ilustracion18,
} from "../../../assets/ilustraciones";

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

export const BotoxService = () => {
  return (
    <div className="mx-6 mb-28 mt-14 md:mx-32">
      {/* SLIDER MOBILE */}
      <header className="md:hidden">
        <Slider {...settingsOff}>
          <div className="[&>p]:section-service">
            <img
              className="mx-auto mb-6 w-32 md:mb-0 md:w-72"
              src={ilustracion14}
              alt=""
            />
            <p className="bg-[#e6f9fb]">
              Está aprobada su utilización en medicina estética por la Agencia
              Española del Medicamento a partir de los 18 años porque lo que se
              pretende es prevenir las arrugas de expresión.
            </p>
          </div>
          <div className="[&>p]:section-service">
            <img
              className="mx-auto mb-6 w-32 md:mb-0 md:w-72"
              src={ilustracion15}
              alt=""
            />
            <p>
              Se recomienda iniciar con el bótox a partir de los 30-35 años
              porque es cuando comenzamos a notarnos esas arrugas de
              gesticulación que van quedando marcadas.
            </p>
          </div>
          <div className="[&>p]:section-service">
            <img
              className="mx-auto mb-6 w-52 md:mb-0 md:w-72"
              src={ilustracion16}
              alt=""
            />
            <p className="bg-[#e6f9fb]">
              Los resultados se empiezan a ver a partir de 48-72h una vez
              realizado el tratamiento, pero el efecto máximo tarda hasta 15
              días en instaurarse.
            </p>
          </div>
          <div className="[&>p]:section-service">
            <img
              className="mx-auto mb-6 w-52 md:mb-0 md:w-72"
              src={ilustracion17}
              alt=""
            />
            <p>Se recomienda una cada seis meses, dos veces al año.</p>
          </div>
        </Slider>
      </header>

      <header className="[&>div>p]:section-service hidden md:block lg:space-y-14">
        <div className="flex items-center">
          <img className="w-52 lg:mr-10" src={ilustracion14} alt="" />
          <p className="bg-[#e6f9fb]">
            Está aprobada su utilización en medicina estética por la Agencia
            Española del Medicamento a partir de los 18 años porque lo que se
            pretende es prevenir las arrugas de expresión.
          </p>
        </div>
        <div className="flex items-center">
          <p>
            Se recomienda iniciar con el bótox a partir de los 30-35 años porque
            es cuando comenzamos a notarnos esas arrugas de
            gestBENEFICIOSiculación que van quedando marcadas.
          </p>
          <img className="w-52 lg:ml-20" src={ilustracion15} alt="" />
        </div>
        <div className="flex items-center">
          <img className="lg:mr-10" src={ilustracion16} alt="" />
          <p className="bg-[#e6f9fb]">
            Los resultados se empiezan a ver a partir de 48-72h una vez
            realizado el tratamiento, pero el efecto máximo tarda hasta 15 días
            en instaurarse.
          </p>
        </div>
        <div className="flex items-center justify-end gap-32">
          <p>Se recomienda una cada seis meses, dos veces al año.</p>
          <img className="lg:ml-10" src={ilustracion17} alt="" />
        </div>
      </header>

      <hr className="mx-auto my-14 hidden w-40 border border-[#d8e6e8] md:block " />

      <main className=" space-y-12 pt-32 md:pt-0">
        <h1 className="text-center text-2xl font-bold text-[#024873] md:text-start ">
          BOTOX
        </h1>
        <p className="text-justify text-lg font-light ">
          El tratamiento de Botox o toxina botulínica consiste en pequeñas
          inyecciones en las áreas a tratar, que consiguen bloquear de forma
          reversible el impulso nervioso que produce la contracción muscular.
          Así se crea una relajación de los músculos faciales logrando detener
          la aparición de arrugas de expresión de forma temporal. De hecho, no
          hay que esperar a que estas sean profundas para comenzar con el
          tratamiento, sino que los expertos aconsejan comenzar con el bótox
          preventivo alrededor de los 30-35 años.
        </p>
        <h2 className="text-center text-2xl font-bold text-[#024873]">
          BENEFICIOS
        </h2>
        <img
          className="mx-auto w-[550px] lg:pb-14"
          src={ilustracion18}
          alt=""
        />
      </main>
      <footer className="mx-6 md:mx-32 md:flex md:gap-24">
        <ul className="list-disc space-y-2 pt-10 text-[17px] font-medium text-[#024873] md:space-y-6 md:pb-0 md:pb-2 md:pt-0 ">
          <li>No requiere anestesia.</li>
          <li>No requiere hospitalización posterior.</li>
          <li>
            Es un tratamiento muy rápido y no impide realizar tus actividades
            diarias.
          </li>
          <li>
            Se inyecta en la zona a tratar. Por lo que no afecta a otros niveles
            del organismo.
          </li>
          <li>Se adapta a cada rostro y forma de gesticular.</li>
        </ul>
        <ul className="list-disc space-y-2 text-[17px] font-medium text-[#024873] md:space-y-6">
          <li>
            El tratamiento es reversible. Por si los efectos no han sido los
            esperados.
          </li>
          <li>
            Es una técnica muy segura. Bien aplicado no suele provocar efectos
            secundarios
          </li>
          <li>No varía los volúmenes y proporciones del rostro.</li>
          <li>Se puede aplicar en cualquier época del año.</li>
          <li>
            El efecto puede durar entre 3 y 9 meses y se recomiendan 2 sesiones
            al año.
          </li>
        </ul>
      </footer>
      <hr className="relative left-[530px] top-[112px] hidden w-14 rotate-90 rounded-full border-2 border-[#bfd6d9] md:block " />
    </div>
  );
};
