import ytVideo from "../assets/ytvideo.png";

function YoutubeSection() {
  return (
    <div className=" h-[580px] bg-gray-50 px-32 flex py-20">
      <img src={ytVideo} alt="yputube video" />
      <div className="px-32 flex flex-col justify-between">
        <span className=" text-[28px]">VIDEO</span>
        <p className=" text-[36px] leading-[104.5%]">
          Discover the future of food delivery with our exciting Aerobite
          YouTube video! Dive into the world of drone technology and see
          firsthand how Aerobite is transforming the way you receive your
          favorite meals.
        </p>
        <button className=" py-6 px-12 text-white self-start font-light bg-primary text-[28px] rounded-full hover:bg-black hover:text-white transition-all duration-300">
          WATCH ON YOUTUBE
        </button>
      </div>
    </div>
  );
}

export default YoutubeSection;
