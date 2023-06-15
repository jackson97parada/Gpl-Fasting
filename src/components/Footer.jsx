import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#101010] text-center space-y-8 pb-6">
        <ul className="flex justify-center pb-12 [&>li]:icons ">
          <li>
            <div href="#" className="rounded-full bg-[#d63953]">
              <a href="">
                <i className="text-2xl text-[#161616]">
                  <CgFacebook />
                </i>
              </a>
            </div>
          </li>
          <li>
            <div className="rounded-full bg-[#d63953]">
              <a href="#">
                <i className="text-sm">
                  <AiOutlineTwitter />
                </i>
              </a>
            </div>
          </li>
          <li>
            <div className="rounded-full bg-[#d63953]">
              <a href="#">
                <i>
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

      <div className="bg-[#161616] text-center p-4 space-y-7">
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
    </footer>
  );
};
