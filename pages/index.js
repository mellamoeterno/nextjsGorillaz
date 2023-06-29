import Header from "../components/header";
import GlassesTopFrame from "../components/glasses-top-frame";
import OuterShirtsFrame from "../components/outer-shirts-frame";
import NoodleOuterRedBlackFrame from "../components/noodle-outer-red-black-frame";

const PageFrame = () => {
  return (
    <div className="relative [background:linear-gradient(rgba(179,_21,_235,_0.85),_rgba(179,_21,_235,_0.85)),_#fff] w-full overflow-hidden flex flex-col items-end justify-start gap-[12px] text-left text-5xl text-white font-inter">
      <Header />
      <GlassesTopFrame />
      <div className="self-stretch [background:linear-gradient(95.02deg,_rgba(128,_0,_255,_0.7),_rgba(128,_0,_255,_0)),_rgba(143,_0,_255,_0.28)] overflow-hidden" />
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="relative w-[1457px] h-[674px]">
              <img
                className="absolute top-[0px] left-[0px] w-[1457px] h-[674px] object-cover"
                alt=""
                src="/bigdrumguy1--copia-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(95.02deg,_rgba(128,_0,_255,_0.7),_rgba(128,_0,_255,_0)),_rgba(143,_0,_255,_0.28)] overflow-hidden" />
      <OuterShirtsFrame />
      <div className="self-stretch overflow-hidden flex flex-row py-[69px] px-0 items-start justify-start">
        <div className="flex-1 overflow-hidden" />
        <div className="relative w-[322px] h-[380px]">
          <div className="absolute top-[351px] left-[8px] w-[82px] h-[29px]">
            <div className="absolute top-[0px] left-[0px]">299Eur</div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[322px] h-[324px] object-cover"
            alt=""
            src="/murdocglasses@2x.png"
          />
        </div>
        <div className="flex-1 overflow-hidden" />
      </div>
      <div className="self-stretch flex flex-row py-[127px] px-0 items-end justify-start gap-[1px]">
        <div className="relative w-[1020px] h-[562px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1020px] h-[562px] object-cover"
            alt=""
            src="/noodle-section@2x.png"
          />
        </div>
        <div className="flex-1 overflow-hidden" />
        <div className="relative w-[407px] h-[477px]">
          <img
            className="absolute top-[0px] left-[0px] w-[407px] h-[477px] object-cover"
            alt=""
            src="/noodle-mid-size@2x.png"
          />
        </div>
      </div>
      <NoodleOuterRedBlackFrame />
      <div className="self-stretch [background:linear-gradient(180deg,_rgba(250,_0,_255,_0.7)_62.5%,_rgba(0,_0,_0,_0)),_#fff] overflow-hidden flex flex-col items-start justify-start text-black">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="relative w-[1457px] h-[625px] overflow-hidden shrink-0">
            <div className="absolute top-[577px] left-[1045px]">
              THIS IS NOT A OFFICIAL WEBSITE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFrame;
