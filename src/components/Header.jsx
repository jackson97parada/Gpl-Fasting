import { firstAbout } from "../assets/imagesAboutUs";

export const Header = () => {
  return (
    <div className="pb-10 pt-32 lg:pt-48" id="inicio">
      <hr className="relative left-10 top-4 z-10 w-14 border-2 border-[#0378a6] lg:-top-8" />
      <hr className="relative left-[140px] top-[1690px] z-10 w-16 rotate-90 border-[2.5px] border-[#0378a6] lg:left-[650px] lg:top-[995px]" />
      <div className="lg:mx-32 lg:mb-32 lg:flex">
        <div className="z-30 text-center lg:px-10 lg:text-start">
          <h1 className="px-6 pb-16 pt-10 text-start text-[35px] font-bold leading-10 text-[#191f40] lg:mt-20 lg:px-0 lg:pt-0 lg:text-[50px] lg:leading-tight">
            CONVIERTETE EN LO QUE SUEÑAS!
          </h1>
          <a
            href="https://wa.me/+3001221432"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-4 border-[#024873] px-24 py-4 text-xl font-bold text-[#024873] transition duration-500 hover:bg-[#024873] hover:text-white hover:shadow-2xl lg:px-6 lg:text-4xl"
          >
            HABLEMOS!
          </a>
        </div>
        <img
          className="hidden w-[350px] lg:block lg:w-[550px]"
          src={firstAbout}
        />
      </div>

      <div className="[&>div]:div-card [&>div>img]:div-card-img relative bottom-[80px] mt-44 space-y-10 px-6 lg:mt-0 lg:flex lg:space-y-0 lg:px-0 lg:pt-20 [&>div>h1]:text-2xl [&>div>h1]:font-bold">
        <div className="bg-[#0378a6]"></div>

        <div className="bg-white"></div>

        <div>
          <div className="mt-10 flex"></div>
        </div>
      </div>
    </div>
  );
};
