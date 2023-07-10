import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { SocialMedias } from "./SocialMedias";

export const Footer = () => {
  return (
    <footer id="contacto">
      <div className="bg-[#101010] lg:bg-[#1b1b1b] text-center space-y-8 pt-16 pb-6 lg:py-32 lg:px-32 lg:flex lg:items-center lg:justify-between lg:space-y-0">
        <ul className="flex justify-center gap-2 box-content pb-12 lg:pb-0 [&>li]:icons [&>li>div]:div-icons [&>li>div>a>i]:icon">
          <li>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-[25px]">
                  <TiSocialFacebook />
                </i>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-base">
                  <AiOutlineTwitter />
                </i>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-base">
                  <SlSocialInstagram />
                </i>
              </a>
            </div>
          </li>
        </ul>

        <h1 className="text-3xl text-white font-bold pb-1">¿HABLAMOS?</h1>
        <button className="border border-[#d63953] rounded-lg px-6 py-3 text-base text-white font-bold hover:bg-[#d63953] hover:shadow-lg hover:shadow-gray-700 transition">
          Has una consulta!
        </button>
      </div>

      <div className="bg-[#161616] text-center p-4 lg:py-12 space-y-7 lg:flex lg:justify-center lg:gap-[30%] lg:space-y-0">
        <div className="[&>h1]:text-white">
          <h1 className="font-bold">Colombia.</h1>
          <h1 className="font-extralight tracking-tighter">+57 3208425152</h1>
        </div>
        <div className="[&>h1]:text-white">
          <h1 className="font-bold">Mexico.</h1>
          <h1 className="font-extralight tracking-tighter">+57 3208425152</h1>
        </div>
      </div>

      <h5 className="text-sm text-white text-center font-extralight bg-black p-10">
        2023, todos los derechos reservados.
      </h5>
      <SocialMedias />
    </footer>
  );
};
