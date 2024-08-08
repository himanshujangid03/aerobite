import droneVideo from "../assets/drone-video.mp4";

function ServiceHeading() {
  return (
    <>
      <div className="">
        <h1 className="m-0 text-[184px] text-white font-light leading-none">
          Featured
        </h1>
        <div className="m-0 grid grid-cols-[auto,1fr] gap-16 leading-none items-end">
          <video
            src={droneVideo}
            width={278}
            height={139}
            autoPlay
            muted
            loop
            className=" rounded-full"
          ></video>
          <h1 className=" m-0 text-[184px] text-white font-light italic">
            Services
          </h1>
        </div>
      </div>
    </>
  );
}

export default ServiceHeading;
