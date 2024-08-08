import { useScroll, useTransform, motion } from "framer-motion";
import emailIcon from "../assets/email icon.svg";
import { useRef } from "react";

function Contact() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, 1]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y }}
      className=" px-32 mt-64 h-dvh bg-white"
    >
      <h1 className="text-[184px] leading-[104.5%] tracking-tight">
        Subscribe for Newsletter.
      </h1>
      <p className=" text-[44px] mt-8">
        Recieve daily updates and
        <br /> much more.
      </p>

      <div className=" w-[70rem] m-auto p-4 rounded-full bg-secondary flex items-center gap-4 mt-12">
        <input
          type="text"
          className=" flex-1 outline-none h-full text-white bg-transparent w-max text-4xl py-4 px-10"
          placeholder="Please enter your email address"
        />
        <button className=" py-8 px-14 font-medium self-start text-white  bg-primary text-[36px] rounded-full flex items-center gap-4">
          SUBSCRIBE
          <img
            src={emailIcon}
            width={43}
            height={43}
            alt="mail subscription icon"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default Contact;
