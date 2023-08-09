import Slider from "react-slick";
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
      id="testimonios"
      className="bg-[#191f40] px-6 pb-10 pt-0 font-futura lg:px-10 lg:pb-16 lg:pt-10"
    >
      <div className="relative top-[500px] space-y-4 lg:left-[48%] lg:top-32 lg:w-[50%]">
        <hr className="relative bottom-5 w-16 rounded-full border-2 border-[#0378a6]" />

        <h1 className="w-[80%] text-3xl font-bold text-white lg:w-auto lg:text-[38px]">
          Lo que dicen nuestros clientes
        </h1>
        <h1 className="text-xs font-bold text-[#bfd6d9] lg:text-base">
          Somos mas que un grupo empresarial
        </h1>
      </div>

      <Slider {...settings} className="flex">
        {testimonialsData.map(({ id, data }) => (
          <div key={id} className="relative lg:left-[13.5%]">
            <div className="flex flex-wrap gap-16 lg:flex-nowrap">
              <img
                className="h-[336px] rounded-[3.5rem] px-4 lg:h-[500px] lg:w-[386px] lg:rounded-xl lg:px-0"
                src={data.userImg}
                alt={data.user}
              />
              <div className="mt-36 space-y-4">
                <p className="mx-4 whitespace-pre-line pt-6 text-justify text-xs text-white lg:mx-0 lg:w-[70%] lg:pt-10 lg:text-lg">
                  {data.description}
                </p>
                <hr className="relative -right-0 top-8 w-8 border border-[#0378a6] md:block" />
                <h1 className="pb-5 pt-10 text-sm font-bold text-[#bfd6d9]">
                  {data.user}
                </h1>
              </div>
            </div>
            <div className="relative bottom-[85px] left-[305px] -z-10 hidden h-[100px] w-[100px] rounded-md bg-[#0378a6] md:block"></div>
          </div>
        ))}
      </Slider>

      <hr className="mx-auto mt-10 w-[80%] border border-[#5a5358] lg:mt-28" />
    </section>
  );
};
