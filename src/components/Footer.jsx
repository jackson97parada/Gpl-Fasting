import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { SocialMedias } from "./SocialMedias";

const FOOTERDETAILS = [
  {
    link: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.twitter.com",
    icon: <AiOutlineTwitter />,
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
      <div className="bg-[#101010] lg:bg-[#024873] text-center space-y-8 pt-16 pb-6 lg:pt-32 lg:pb-14 lg:px-32 lg:space-y-0">
        <a
          href="https://wa.me/+3001221432"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#0378a6] rounded-lg px-6 py-3 text-2xl text-white font-bold hover:bg-[#0378a6] hover:shadow-lg hover:shadow-gray-600 duration-300 transition"
        >
          AGENDA TU CITA !
        </a>

        <ul className="flex justify-center gap-16 box-content pt-16 lg:pb-0 [&>li]:icons [&>li>div]:div-icons [&>li>div>a>i]:icon">
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

      <div className="bg-[#0378a6] text-center p-4 lg:py-12 space-y-7 lg:flex lg:space-y-0">
        {CONTACTUSDETAILS.map((data, id) => (
          <div key={id} className="w-[67%]">
            <h1 className="text-white font-bold pb-4">{data.title}</h1>
            <div className=" [&>h1]:text-white [&>h1]:text-xs flex-col">
              <h1>{data.cell}</h1>
              <h1>{data.cellTwo}</h1>
              <h1 className="font-bold relative top-2">{data.email}</h1>
            </div>
            <div>
              <p className="text-xs text-white mx-auto w-[80%] text-justify">
                {" "}
                <b>{data.city}</b> {data.address}
              </p>
              <p className="text-xs text-white pt-4 mx-auto w-[80%] text-justify">
                {" "}
                <b>{data.cityTwo}</b> {data.addressTwo}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h5 className="text-sm text-white text-center font-bold bg-black p-10">
        {`${currentYear}, todos los derechos reservados.`}
      </h5>
      <SocialMedias />
    </footer>
  );
};
