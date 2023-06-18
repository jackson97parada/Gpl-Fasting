import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { AboutUsDetails, ImagesAboutUs } from "./AboutUsDetails";

export const SectionAboutUs = () => {
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
    <section id="NOSOTROS" className="py-20 px-6">
      <hr className="border border-[#d63953] w-14 relative bottom-5 left-2" />
      <div className="space-y-5">
        <h1 className="text-3xl font-bold pt-3">Nosotros</h1>
        <h2 className="text-[11px] text-[#d63953] font-bold">
          CONOCENOS UN POCO MÁS
        </h2>
      </div>

      <p className="text-xs text-justify text-gray-600 mt-6 mb-14">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio in animi,
        eligendi excepturi temporibus ratione, esse et laboriosam facilis quod
        nihil commodi officia harum odit, sapiente aliquam quibusdam eum
        praesentium accusantium officiis at est ipsum laudantium! Quae
        praesentium blanditiis sit?
      </p>

      <Slider {...settings}>
        {ImagesAboutUs.map(({ id, data }) => (
          <div key={id}>
            <img src={data.imgProfile} alt="" />
          </div>
        ))}
      </Slider>

      <div className="mt-20">
        {AboutUsDetails.map(({ id, data }) => (
          <div key={id} className="space-y-10">
            <h1 className="text-3xl font-bold pt-14">{data.title}</h1>
            <p className="text-xs text-justify text-gray-600 mt-6 mb-14">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
