import { imageHeader } from "../assets";
import { firstCard, secondCard, threeCard } from "../assets/cardsHeader";

export const Header = () => {
  return (
    <div className="pt-10 pb-36" id="INICIO">
      <div className="text-center space-y-4">
        <h1 className="text-[35px] text-start font-bold leading-10 px-6">
          AMAMOS LO QUE HACEMOS
        </h1>
        <button className="border-4 border-[#d63953] rounded-lg px-24 py-2.5 text-xl font-bold hover:bg-[#d63953] hover:shadow-2xl transition">
          HABLEMOS!
        </button>
      </div>
      <div className="overflow-hidden">
        <img
          className="relative -z-10 -rotate-[23deg] left-[135px] top-2 w-[350px]"
          src={imageHeader}
          alt=""
        />
      </div>
      <div className="space-y-10 px-6 [&>div]:div-card [&>div>h1]:text-2xl [&>div>h1]:font-bold [&>div>img]:div-card-img">
        <div className="bg-[#d63953]">
          <h1 className="text-white">GPL FASTING</h1>
          <img src={firstCard} alt="firstcard" />
        </div>

        <div>
          <h1>BELLEZA ESTETICA</h1>
          <img src={secondCard} alt="secondcard" />
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
