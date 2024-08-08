import droneVideo from "../assets/large-video.mp4";
import { motion } from "framer-motion";

function DroneVideo() {
  return (
    <motion.div
      initial={{ y: 350 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="w-full p-0 my-24 -z-10"
    >
      <video
        src={droneVideo}
        autoPlay
        muted
        loop
        className=" w-full h-dvh object-cover"
      ></video>
    </motion.div>
  );
}

export default DroneVideo;
