import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SocialMedias } from "./SocialMedias";

const FOOTERDETAILS = [
  {
    link: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com",
    icon: <SlSocialInstagram />,
  },
];

const CONTACTUSDETAILS = [
  {
    title: "Colombia.",
    city: "Barbosa Santander",
    cityTwo: "Bogotá D.C",
    address:
      "Calle 9a # 9 -17, 2nd piso, edificio blanco frente a Bancolombia, entrada por el callejón Gourmet.",
    addressTwo:
      "Avenida el Dorado 68C-61, 8vo piso, consultorio 815, Edificio torre Davivienda.",
  },
  {
    title: "Contacto.",
    cell: "(+57) 300 2682513",
    cellTwo: "(+57) 318 4613365",
    email: "gplfasting@gmail.com",
  },
  {
    title: "Mexíco.",
    city: "Morelia, Michoacán",
    address:
      "- Quirúrgico Ambulatorio Morelia (QAM), Fernando Montes de Oca 84, Chapultepec Nte., 58260.",
  },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer id="contacto">
      <div className="space-y-8 bg-[#024873] pb-6 pt-16 text-center font-futura lg:space-y-0 lg:px-32 lg:pb-14 lg:pt-28">
        <a
          href="https://wa.me/+3001221432"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-[#0378a6] px-6 py-3 text-2xl font-bold text-white transition duration-300 hover:bg-[#0378a6]"
        >
          AGENDA TU CITA !
        </a>

        <ul className="[&>li]:icons [&>li>div]:div-icons [&>li>div>a>i]:icon box-content flex justify-center gap-16 pb-10 pt-16 lg:pb-0">
          {FOOTERDETAILS.map(({ link, icon }, id) => (
            <li key={id}>
              <div className="cursor-pointer">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <i>{icon}</i>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-7 bg-[#0378a6] p-4 text-center lg:flex lg:space-y-0 lg:px-32 lg:py-12">
        {CONTACTUSDETAILS.map((data, id) => (
          <div key={id} className="md:w-[67%]">
            <h1 className="pb-4 font-bold text-white">{data.title}</h1>
            <div className="flex-col font-futuraLigth [&>h1]:text-xs [&>h1]:font-light [&>h1]:text-white ">
              <h1>{data.cell}</h1>
              <h1>{data.cellTwo}</h1>
              <h2 className="relative top-2 text-xs font-bold text-white">
                {data.email}
              </h2>
            </div>
            <div>
              <p className="mx-auto w-[80%] text-justify text-xs font-light text-white">
                {" "}
                <b className="font-medium">{data.city}</b> {data.address}
              </p>
              <p className="mx-auto w-[80%] pt-4 text-justify text-xs font-light text-white">
                {" "}
                <b className="font-medium">{data.cityTwo}</b> {data.addressTwo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h5 className="bg-black p-10 text-center font-futura text-sm font-bold text-white">
        {`${currentYear}, todos los derechos reservados.`}
      </h5>
      <SocialMedias />
    </footer>
  );
};
