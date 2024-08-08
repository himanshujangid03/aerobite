import { useRef } from "react";
import githubIcon from "../assets/github-icon.svg";
import instaIcon from "../assets/instagram-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import { motion, useScroll, useTransform } from "framer-motion";

function Footer() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const color = useTransform(scrollYProgress, [0, "#000"], [0, "#fff"]);

  return (
    <motion.div
      ref={targetRef}
      style={{ color }}
      transition={{ delay: 0 }}
      className=" bg-secondary h-fit -z-10"
    >
      <h1 className=" text-white text-[350px] font-medium leading-none w-min m-auto text-center">
        AEROBITE
      </h1>
      <div className=" px-24 flex-col gap-">
        <div className=" flex justify-between mt-[96px]">
          <div className=" font-medium text-[44px] text-white flex-col gap-[15px] ">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
            <p>TERMS & CONDITIONS</p>
          </div>
          <div className=" flex flex-col gap-6">
            <p className="font-medium text-[44px] text-white underline">
              himanshujangid516@gmail.com
            </p>
            <div className=" flex justify-end gap-6">
              <img
                src={githubIcon}
                alt="github"
                width={70}
                height={70}
                className=" cursor-pointer"
              />
              <img
                src={instaIcon}
                alt="instagram"
                width={70}
                height={70}
                className=" cursor-pointer"
              />
              <img
                src={linkedinIcon}
                alt="linkedin"
                width={70}
                height={70}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" text-[#A3A3A3] text-[36px] text-center w-full py-8">
          Disclaimer: This website is a conceptual project and is not a real
          business. All content and services described are for demonstration
          purposes only.
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
