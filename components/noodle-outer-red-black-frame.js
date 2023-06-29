const NoodleOuterRedBlackFrame = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row py-[60px] px-0 items-start justify-start text-left text-5xl text-white font-inter">
      <div className="flex-1 overflow-hidden" />
      <div className="w-[1253px] overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start">
        <img
          className="relative w-[587px] h-[523px] object-cover"
          alt=""
          src="/glasses@2x.png"
        />
        <div className="flex-1 overflow-hidden" />
        <img
          className="relative w-[593px] h-[523px] object-cover"
          alt=""
          src="/noodleglasses@2x.png"
        />
        <div className="relative w-[1253px] h-[77px] overflow-hidden shrink-0">
          <div className="absolute top-[31px] left-[42px]">399Eur</div>
          <div className="absolute top-[31px] left-[658px]">399Eur</div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden" />
    </div>
  );
};

export default NoodleOuterRedBlackFrame;
