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
      <p className=" mt-10 text-[36px] leading-[100%]">
        Our drone delivery service is rapidly expanding. Explore our
        continuously growing list of delivery zones to see if we&apos;re in your
        area.Is your neighborhood not listed? We&apos;re tirelessly working to
        broaden our reach while complying with the latest regulations. Stay
        tuned—we&apos;re eager to deliver to you soon!
      </p>
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
