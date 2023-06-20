import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { AboutUsDetails, ImagesAboutUs } from "./AboutUsDetails";

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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section id="NOSOTROS" className="py-20 lg:py-52 px-6 lg:px-10">
      <hr className="border lg:border-2 border-[#d63953] w-14 relative bottom-5 left-2" />
      <div className="lg:flex justify-between">
        <div className="space-y-5">
          <h1 className="text-3xl lg:text-4xl font-bold pt-3">Nosotros</h1>
          <h2 className="text-[11px] lg:text-base text-[#d63953] font-bold">
            CONOCENOS UN POCO MÁS
          </h2>
        </div>

        <p className="text-xs lg:text-base lg:font-light lg:text-black text-justify text-gray-600 mt-6 mb-14 lg:w-[27%]">
          Lorem ipsum dolor sit amet, consectetuer adi- piscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam{" "}
          {maxWords === 50
            ? "erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
            : ""}
        </p>
      </div>
      <Slider {...settings} className="lg:hidden">
        {ImagesAboutUs.map(({ id, data }) => (
          <div key={id}>
            <img src={data.imgProfile} alt="" />
          </div>
        ))}
      </Slider>

      <div className="mt-20 lg:flex lg:gap-32">
        {AboutUsDetails.map(({ id, data }) => (
          <div key={id} className="space-y-10">
            <h1 className="text-3xl font-bold pt-14">{data.title}</h1>
            <p className="text-xs lg:text-base lg:font-medium lg:text-black text-justify text-gray-600 mt-6 mb-14">
              {data.descriptionTwo}
              {maxWords === 50 ? data.description : undefined}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
