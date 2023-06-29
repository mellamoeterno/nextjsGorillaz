const Header = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col py-2 px-[15px] items-start justify-start text-left text-5xl text-black font-inter">
      <div className="self-stretch bg-lavenderblush overflow-hidden flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-row items-start justify-center gap-[252px]">
          <div className="relative w-[266px] h-[79px] overflow-hidden shrink-0">
            <img
              className="absolute top-[0px] left-[68px] w-[130px] h-[79px] object-cover"
              alt=""
              src="/grillazlogo-1@2x.png"
            />
          </div>
          <div className="relative w-[374px] h-[79px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] w-[105px] h-[79px] overflow-hidden">
              <a
                className="absolute top-[25px] left-[19px] [text-decoration:underline] text-[inherit]"
                href="https://www.gorillaz.com"
                target="_blank"
              >
                Home
              </a>
            </div>
            <div className="absolute top-[0px] left-[134px] w-[105px] h-[79px] overflow-hidden">
              <a
                className="absolute top-[25px] left-[19px] [text-decoration:underline] text-[inherit]"
                href="https://www.youtube.com/@Gorillaz"
                target="_blank"
              >
                Music
              </a>
            </div>
            <div className="absolute top-[0px] left-[269px] w-[105px] h-[79px] overflow-hidden">
              <a
                className="absolute top-[25px] left-[17px] [text-decoration:underline] text-[inherit]"
                href="https://gfoot.store"
                target="_blank"
              >
                Merch
              </a>
            </div>
          </div>
          <div className="relative w-[266px] h-[79px] overflow-hidden shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Header;
