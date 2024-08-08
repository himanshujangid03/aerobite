import largeLogoDark from "../assets/large-logo-dark.png";

function About() {
  return (
    <div className=" px-32 flex gap-[146px] my-[275px]">
      <img src={largeLogoDark} width={642} height={642} alt="about aerobite" />
      <div className="flex flex-col justify-between">
        <p className=" text-[44px] leading-[121%] font-light">
          At Aerobite, we are redefining the food delivery landscape through the
          power of cutting-edge drone technology. Our mission is to provide
          fast, reliable, and eco-friendly food delivery services, ensuring that
          your favorite meals arrive hot and fresh, straight from the kitchen to
          your doorstep.
        </p>
        <button className=" py-8 px-14 self-start text-white font-light  bg-primary text-[36px] rounded-full hover:bg-black hover:text-white transition-all duration-300">
          Get The App
        </button>
      </div>
    </div>
  );
}

export default About;
