import { useScroll, motion, useTransform } from "framer-motion";
import droneImage from "../assets/drone-image.jpg";
import { useRef } from "react";

function HeroSection() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const color = useTransform(scrollYProgress, [0, 1], [1, "white"]);
  const y = useTransform(scrollYProgress, [0, 1], [1, 100]);

  return (
    <motion.div ref={targetRef} style={{ scale, y }}>
      <div className=" grid grid-cols-[auto,auto] items-center justify-center gap-16 py-2">
        <p className=" italic text-[136px] w-fit ">Sky High Dining</p>

        <div>
          <img
            src={droneImage}
            width={278}
            height={139}
            className="rounded-full"
            alt="drone image"
          />
        </div>
      </div>
      <p className=" text-[136px] w-full text-center leading-tight tracking-[-3%]">
        Delivered to Your Doorstep
      </p>
    </motion.div>
  );
}

export default HeroSection;
