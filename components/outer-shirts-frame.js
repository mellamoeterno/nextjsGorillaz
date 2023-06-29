const OuterShirtsFrame = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col py-[81px] px-[399px] items-start justify-start text-left text-5xl text-white font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="relative w-[209px] h-[181px] object-cover"
              alt=""
              src="/shirt@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="relative w-[209px] h-[181px] object-cover"
              alt=""
              src="/shirt2@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="relative w-[209px] h-[181px] object-cover"
              alt=""
              src="/shirt3@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row py-[7px] px-0 items-start justify-start gap-[148px]">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative">99Eur</div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="relative">99Eur</div>
          </div>
          <div className="w-[206px] flex flex-row items-start justify-start">
            <div className="relative">99Eur</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterShirtsFrame;
