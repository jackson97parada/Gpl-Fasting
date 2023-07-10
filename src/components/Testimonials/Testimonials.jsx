import Slider from "react-slick";
import { firstService } from "../../assets/imagesServices";
import { testimonialsData } from "./testimonialsData";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
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
        centerMode: true,
        centerPadding: "-0px",
        dots: false,
      },
    },
  ],
};

export const Testimonials = () => {
  return (
    <section
      id="clientes"
      className="bg-[#101010] pt-0 lg:pt-10 px-6 lg:px-10 lg:pb-20"
    >
      <hr className="border-2 border-[#d63953] w-14 rotate-90 relative left-[50%] bottom-[135px]" />

      <div className="lg:w-[50%] space-y-4 relative top-[500px] lg:left-[48%] lg:top-32">
        <h1 className="w-[80%] lg:w-auto text-3xl lg:text-4xl text-white font-bold">
          Lo que dicen nuestros clientes
        </h1>
        <h1 className="text-xs lg:text-base text-[#d63953] font-bold">
          Somos mas que un grupo empresarial
        </h1>
      </div>
      <Slider {...settings} className="flex">
        {testimonialsData.map(({ id, data }) => (
          <div key={id} className="relative lg:left-[13.5%]">
            <div className="flex flex-wrap lg:flex-nowrap gap-16">
              <img
                className="rounded-[3.5rem] lg:rounded-xl h-[336px] lg:h-[500px] lg:w-[386px] px-4 lg:px-0"
                src={firstService}
                alt={data.user}
              />
              <div className="space-y-4 mt-36">
                <p className="text-xs text-[#9daca2] lg:text-sm text-justify lg:font-medium pt-4 lg:w-[70%] lg:pt-10">
                  {data.description}
                </p>
                <hr className="border border-white w-8 relative right-2 top-8" />
                <h1 className="text-sm text-white lg:text-[#d63953] font-bold pt-10 pb-5">
                  {data.user}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <hr className="w-[80%] mx-auto border border-[#554e50] mt-10 lg:mt-28" />
    </section>
  );
};
