import { useEffect, useState } from "react";
import Slider from "react-slick";
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

const SECTIONDETAILS = {
  descriptionMobile:
    "erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
};

export const SectionAboutUs = () => {
  const [maxWords, setMaxWords] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newMaxWords = windowWidth >= 1024 ? 20 : 50;
      setMaxWords(newMaxWords);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="nosotros" className="lg:pt-28 py-20 lg:py-20 px-6 lg:px-10">
      <div className="lg:flex justify-between">
        <div className="space-y-5">
          <h1 className="text-3xl lg:text-6xl text-[#024873] font-extrabold pt-3">
            Nosotros
          </h1>
          <h2 className="text-[11px] lg:text-base text-[#191f40] font-bold">
            “EL QUE NO VIVE PARA SERVIR NO SIRVE PARA VIVIR”
          </h2>
        </div>

        <p className="text-xs lg:text-base lg:font-light lg:text-black text-justify text-gray-600 mt-6 mb-14 lg:w-[27%]">
          {SECTIONDETAILS.description}{" "}
          {maxWords === 50 ? SECTIONDETAILS.descriptionMobile : ""}
        </p>
      </div>

      <div className="hidden lg:flex lg:justify-center lg:flex-wrap">
        <div className="relative top-[50px]">
          <img src={images[0]} className="w-[360px]" alt="" />
        </div>
        <div className="flex gap-24 pt-32 pb-20 [&>div>img]:w-[360px]">
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

      <hr className="border-2 border-[#024873] w-14 hidden lg:block relative top-10 left-10 z-10" />

      <div className="mt-20">
        <section className="space-y-10">
          <div className="flex gap-10 justify-center items-center">
            <img src={dataImage[0]} className="w-[529px]" alt="" />
            <div className="w-[40%] text-center space-y-10">
              <h1 className="text-2xl text-[#191f40] font-bold">
                {dataTitle[0]}
              </h1>
              <p className="text-justify">{dataDescription[0]}</p>
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="w-[40%] text-center space-y-10">
              <h1 className="text-2xl text-[#191f40] font-bold">
                {dataTitle[1]}
              </h1>
              <p className="text-justify">{dataDescription[1]}</p>
            </div>
            <img src={dataImage[1]} className="w-[529px]" alt="" />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <img src={dataImage[2]} className="w-[529px]" alt="" />
            <div className="w-[40%] text-center space-y-10">
              <h1 className="text-2xl text-[#191f40] font-bold">
                {dataTitle[2]}
              </h1>
              <p className="text-justify">{dataDescription[2]}</p>
            </div>
          </div>
        </section>
        <hr className="border-[2.9px] rounded-full border-[#0378a6] w-16 rotate-90 relative left-[45%] top-20" />
      </div>
    </section>
  );
};
