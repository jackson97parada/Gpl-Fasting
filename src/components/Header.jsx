import { CircleCharts } from "../graphs/CircleCharts";
import { imageHeader } from "../assets";
import { threeCard } from "../assets/cardsHeader";
import { BarsCharts } from "../graphs/BarsCharts";

const HEADERDETAILS = {
  title: "AMAMOS LO QUE HACEMOS",
  buttonText: "HABLEMOS!",
};

export const Header = () => {
  return (
    <div className="pb-36 pt-32 lg:pt-52" id="inicio">
      <div className="lg:flex">
        <hr className="border-2 border-[#d63953] w-14 hidden lg:block absolute top-48 left-32 z-10" />
        <div className="text-center lg:text-start lg:px-10 space-y-4 lg:space-y-24 lg:w-[45%]">
          <h1 className="text-[35px] lg:text-7xl text-start font-bold leading-10 lg:leading-tight px-6 lg:px-0">
            {HEADERDETAILS.title}
          </h1>
          <button className="border-4 border-[#d63953] rounded-lg px-24 py-2.5 lg:px-6 text-xl lg:text-2xl font-bold hover:translate-y-2 hover:bg-[#d63953] hover:shadow-2xl transition-all">
            {HEADERDETAILS.buttonText}
          </button>
        </div>
        <div className="overflow-hidden lg:left-[40%] lg:absolute lg:top-[200px]">
          <img
            className="relative -z-10 -rotate-[23deg] left-[135px] lg:left-[100px] top-2 w-[350px] lg:w-[950px]"
            src={imageHeader}
            alt={HEADERDETAILS.title}
          />
        </div>
      </div>

      <div className="lg:flex space-y-10 lg:space-y-0 px-6 lg:pt-28 lg:px-0 [&>div]:div-card [&>div>h1]:text-2xl [&>div>h1]:font-bold [&>div>img]:div-card-img">
        <div className="bg-[#d63953]">
          <h1 className="text-white">GPL FASTING</h1>
          <CircleCharts />
        </div>

        <div className="bg-white">
          <h1>BELLEZA ESTETICA</h1>
          <div className="rotate-90">
            <div className="rotate-[270deg] absolute top-[175px] z-10 left-[133px] [&>div]:font-bold [&>div]:text-[#57596c] [&>div]:bg-[#e3e3e3] [&>div]:w-[70px] [&>div]:rounded-xl [&>div]:p-1 [&>div]:py-1.5 [&>div]:text-center [&>div]:text-xl">
              <div>100%</div>
              <div className="my-3.5">50%</div>
              <div>75%</div>
            </div>
            <BarsCharts />
          </div>
        </div>

        <div>
          <h1>BELLEZA ESTETICA</h1>
          <img src={threeCard} alt="threecard" />
        </div>
      </div>
      <hr className="border border-[#d63953] w-10 rotate-90 relative left-[45%] top-5 -z-10" />
      <hr className="border border-[#d63953] w-14 relative top-20 left-8 -z-10" />
    </div>
  );
};
