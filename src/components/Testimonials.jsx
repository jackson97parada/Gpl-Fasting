import { firstService } from "../assets/imagesServices";

const testimonialsDetail = {
  title: "Lo que dicen nuestros clientes",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde  temporibus exercitationem sapiente. Non repellat laborum dolore  possimus dolorem deleniti. Beatae repellat odit labore, eos  perferendis ipsam est quisquam, eveniet aut consequuntur doloremque  enim quo eligendi saepe maxime officia error neque esse dolor optio  obcaecati! Velit, saepe eius molestias consectetur assumenda dolor  qui architecto dolore eveniet consequatur aut minus tenetur! Et  asperiores amet quia fuga recusandae repudiandae molestias ratione  distinctio!",
};

export const Testimonials = () => {
  return (
    <section id="CLIENTES" className="bg-[#101010] pt-12 px-6">
      <hr className="border border-[#d63953] w-14 rotate-90 relative left-[42%] bottom-12" />
      <div>
        <img className="rounded-[3.5rem] h-[336px]" src={firstService} alt="" />

        <hr className="border border-[#d63953] w-14 relative top-8" />
        <div className="space-y-4 mt-14">
          <h1 className="text-3xl text-white font-bold">
            {testimonialsDetail.title}
          </h1>
          <h1 className="text-xs text-[#d63953] font-bold">
            Somos mas que un grupo empresarial
          </h1>
          <p className="text-xs text-gray-400 text-justify pt-4">
            {testimonialsDetail.description}
          </p>
          <hr className="border border-white w-8 relative right-2 top-8" />
          <h1 className="text-sm text-white font-bold pt-10 pb-5">
            Steven Espitia, gpl fasting
          </h1>
        </div>
      </div>

      <hr className="w-[80%] mx-auto border border-[#554e50] mt-10" />
    </section>
  );
};
