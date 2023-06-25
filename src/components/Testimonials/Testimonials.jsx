import { firstService } from "../../assets/imagesServices";

const testimonialsDetail = {
  title: "Lo que dicen nuestros clientes",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde  temporibus exercitationem sapiente. Non repellat laborum dolore  possimus dolorem deleniti. Beatae repellat odit labore, eos  perferendis ipsam est quisquam, eveniet aut consequuntur doloremque  enim quo eligendi saepe maxime officia error neque esse dolor optio  obcaecati! Velit, saepe eius molestias consectetur assumenda dolor  qui architecto dolore eveniet consequatur aut minus tenetur! Et  asperiores amet quia fuga recusandae repudiandae molestias ratione  distinctio!",
};

export const Testimonials = () => {
  return (
    <section
      id="CLIENTES"
      className="bg-[#101010] pt-32 lg:pt-[135px] px-6 lg:px-10 lg:pb-20"
    >
      <hr className="border border-[#d63953] w-14 rotate-90 relative left-[42%] bottom-12" />
      <div className="lg:flex lg:justify-center">
        <img
          className="rounded-[3.5rem] lg:rounded-xl h-[336px] lg:h-[500px] lg:w-[386px]"
          src={firstService}
          alt=""
        />

        <hr className="border border-[#d63953] w-14 relative top-8" />
        <div className="space-y-4 mt-14 lg:w-[40%]">
          <h1 className="text-3xl text-white font-bold">
            {testimonialsDetail.title}
          </h1>
          <h1 className="text-xs text-[#d63953] font-bold">
            Somos mas que un grupo empresarial
          </h1>
          <p className="text-xs text-[#9daca2] lg:text-sm text-justify lg:font-medium pt-4 lg:pt-10">
            {testimonialsDetail.description}
          </p>
          <hr className="border border-white w-8 relative right-2 top-8" />
          <h1 className="text-sm text-white lg:text-[#d63953] font-bold pt-10 pb-5">
            STEVEN ESPITIA
          </h1>
        </div>
      </div>
      <hr className="w-[80%] mx-auto border border-[#554e50] mt-10 lg:mt-28" />
    </section>
  );
};
