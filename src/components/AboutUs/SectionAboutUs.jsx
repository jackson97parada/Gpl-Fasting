import { useState } from "react";
import Slider from "react-slick";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "../slick.css";
import "../slick-theme.css";
import { AboutUsDetails, ImagesAboutUs } from "./AboutUsDetails";
import { settings } from "../";

const images = ImagesAboutUs.map((image) => image.data.imgProfile);

const dataTitle = AboutUsDetails.map((aboutUs) => aboutUs.data.title);
const dataDescription = AboutUsDetails.map(
  (aboutUs) => aboutUs.data.description
);
const dataImage = AboutUsDetails.map((aboutUs) => aboutUs.data.imgAbout);

export const SectionAboutUs = () => {
  const [btnModal, setBtnModal] = useState(true);

  const handleBtnModal = () => {
    setBtnModal(!btnModal);
  };

  return (
    <section
      id="nosotros"
      className="px-6 py-20 lg:mx-32 lg:px-10 lg:py-20 lg:pt-28"
    >
      <div className="justify-between pb-20 lg:flex lg:pb-0">
        <div className="space-y-5 text-center lg:text-start">
          <h1 className="pt-3 text-4xl font-extrabold text-[#024873] lg:text-6xl">
            Nosotros
          </h1>
          <h2 className="text-[11px] font-bold text-[#191f40] lg:text-base">
            “EL QUE NO VIVE PARA SERVIR NO SIRVE PARA VIVIR”
          </h2>

          <button
            onClick={handleBtnModal}
            className="mx-auto flex items-center gap-2 rounded-full bg-[#024873] px-7 py-1.5 font-bold text-white lg:hidden "
          >
            <FaAngleDoubleDown /> Ver más
          </button>

          <div
            className={`z-20 max-w-[386px] rounded-[2.5rem] pt-5 shadow-2xl ${
              btnModal ? "hidden" : "block"
            }`}
          >
            <div>
              <header className="flex items-center justify-between border-b-2 border-[#024873]">
                <h1 className=" pb-4 pl-8 text-2xl font-bold text-[#024873]">
                  Nosotros
                </h1>
                <button className="mb-4 mr-8 text-3xl" onClick={handleBtnModal}>
                  <GrClose />
                </button>
              </header>
              <main className="p-8">
                {AboutUsDetails.map(({ id, data }) => (
                  <div key={id} className="space-y-4">
                    <h1 className="text-lg font-bold text-[#191f40] ">
                      {data.title}
                    </h1>
                    <p className="pb-4 text-justify text-sm">
                      {data.description}
                    </p>
                  </div>
                ))}
              </main>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-wrap lg:justify-center">
        <div className="relative top-[50px]">
          <img src={images[0]} className="w-[290px]" alt="" />
        </div>
        <div className="flex gap-24 pb-20 pt-32 [&>div>img]:w-[360px]">
          {ImagesAboutUs.map(({ id, data }) => (
            <div key={id}>
              <img src={data.imgProfile} />
            </div>
          ))}
        </div>
      </div>

      <Slider {...settings} className="lg:hidden">
        {ImagesAboutUs.map(({ id, data }) => (
          <div key={id}>
            <img src={data.imgProfile} alt="" />
          </div>
        ))}
      </Slider>

      <hr className="relative -left-24 top-10 z-10 hidden w-14 border-2 border-[#024873] lg:block" />

      <div className="mt-20 hidden lg:block">
        <section className="[&>div]:section-about-div [&>div>div]:section-about-div-div [&>div>div>h1]:section-about-div-h1 space-y-10 [&>div>div>p]:text-justify [&>div>div>p]:font-light [&>div>img]:w-[529px]">
          <div>
            <img src={dataImage[0]} alt="" />
            <div>
              <h1>{dataTitle[0]}</h1>
              <p>{dataDescription[0]}</p>
            </div>
          </div>
          <div>
            <div>
              <h1>{dataTitle[1]}</h1>
              <p>{dataDescription[1]}</p>
            </div>
            <img src={dataImage[1]} alt="" />
          </div>
          <div>
            <img src={dataImage[2]} alt="" />
            <div>
              <h1>{dataTitle[2]}</h1>
              <p>{dataDescription[2]}</p>
            </div>
          </div>
        </section>
        <hr className="relative left-[45%] top-20 w-16 rotate-90 rounded-full border-[2.9px] border-[#0378a6]" />
      </div>
    </section>
  );
};
