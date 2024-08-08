import { useRef } from "react";
import mapZonesImage from "../assets/map.png";
import { motion, useScroll, useTransform } from "framer-motion";

function DeliveryZones() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [1, 500]);

  return (
    <div className="px-32 mt-32 h-max">
      <div>
        <p className=" text-[184px] leading-[104.5%] tracking-tight">
          Aerobite
        </p>
        <p className="  text-[184px] leading-[104.5%] pl-32 tracking-tight">
          <span className=" italic mr-12">Delivery</span>
          Zones
        </p>
      </div>
      <motion.img
        ref={targetRef}
        style={{ y, scale }}
        src={mapZonesImage}
        alt="maps"
      />
    </div>
  );
}

export default DeliveryZones;
