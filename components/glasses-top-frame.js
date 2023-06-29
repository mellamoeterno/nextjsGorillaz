const GlassesTopFrame = () => {
  return (
    <div className="self-stretch flex flex-col py-[17px] px-[61px] items-start justify-start">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-start gap-[191px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="relative w-[691px] h-[603px]">
              <img
                className="absolute top-[0px] left-[0px] w-[691px] h-[603px] object-cover"
                alt=""
                src="/murdoc-waring-glasses-1@2x.png"
              />
            </div>
          </div>
          <div className="relative w-[305px] h-[306px]">
            <img
              className="absolute top-[0px] left-[0px] w-[305px] h-[306px] object-cover"
              alt=""
              src="/murdco-glasses-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassesTopFrame;
