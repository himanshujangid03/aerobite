import About from "./components/About";
import DroneVideo from "./components/DroneVideo";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import Services from "./components/Services";
import YoutubeSection from "./components/YoutubeSection";
import DeliveryZones from "./components/DeliveryZones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion as m } from "framer-motion";

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

export default function App() {
  return (
    <>
      <m.div className=" font-matter transition-all">
        <Navbar />
        <HeroSection />
        <DroneVideo />
        <About />
        <Services />
        <div className=" h-[256px]"></div>
        <YoutubeSection />
        <DeliveryZones />
        <Contact />
        <Footer />
      </m.div>
    </>
  );
}
