import { imageHeader } from "../assets";

export const Header = () => {
  return (
    <div className="pb-20 pt-32 lg:pt-52" id="inicio">
      <div className="lg:flex">
        <hr className="border-2 border-[#0378a6] w-14 hidden lg:block absolute top-48 left-10 z-10" />
        <div className="text-center lg:text-start lg:px-10 space-y-4 lg:space-y-24 lg:w-[45%]">
          <h1 className="text-[35px] lg:text-7xl text-[#191f40] text-start font-bold leading-10 lg:leading-tight px-6 lg:px-0">
            AMAMOS LO QUE HACEMOS
          </h1>
          <button className="border-4 border-[#024873] rounded-lg px-24 py-2.5 lg:px-6 text-[#024873] hover:text-white text-xl lg:text-2xl font-bold hover:translate-y-2 hover:bg-[#024873] hover:shadow-2xl transition-all">
            HABLEMOS!
          </button>
        </div>
        <div className="overflow-hidden">
          <img
            className="relative -z-10 -rotate-[23deg] left-[135px] lg:left-[100px] top-2 w-[350px] lg:w-[950px]"
            src={imageHeader}
          />
        </div>
      </div>

      <div className="relative bottom-[80px] lg:flex space-y-10 lg:space-y-0 px-6 lg:pt-20 lg:px-0 [&>div]:div-card [&>div>h1]:text-2xl [&>div>h1]:font-bold [&>div>img]:div-card-img">
        <div className="bg-[#0378a6]"></div>

        <div className="bg-white">
          <div className="rotate-90 absolute left-14 lg:relative lg:left-0">
            <div className="rotate-[270deg] absolute top-[175px] z-10 left-[133px] [&>div]:font-bold [&>div]:text-[#57596c] [&>div]:bg-[#e3e3e3] [&>div]:w-[70px] [&>div]:rounded-xl [&>div]:p-1 [&>div]:py-1.5 [&>div]:text-center [&>div]:text-xl"></div>
          </div>
        </div>

        <div>
          <div className="flex mt-10"></div>
        </div>
      </div>
      <hr className="border-[2.5px] border-[#0378a6] w-16 rotate-90 relative left-[50%] top-[8.5%] z-10" />
    </div>
  );
};
