import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DesktopProjects from "./Desktop";
import MobileProjects from "./Mobile";

export { projects } from "../data/projects";

export const ProjectsHeader = memo(function ProjectsHeader() {
  return (
    <div className="flex flex-col justify-center text-center w-1/2 gap-8 sticky top-0 h-dvh max-sm:w-full max-sm:relative max-sm:h-auto max-sm:justify-start max-sm:px-6 max-sm:mb-4 max-sm:gap-2">
      <div className="max-w-2xl flex flex-col text-left">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section-title font-black tracking-[-0.05em] uppercase mb-6 leading-heading font-f1 max-[900px]:text-section-title-tab max-sm:text-section-title-mobile"
        >
          PROJECTS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-[#9ca3af] text-body-lg font-f2 max-w-md leading-body max-sm:my-6 max-sm:text-[16px] max-sm:max-w-full"
        >
          Whether it's creating a brand identity, designing a website, or
          developing marketing materials, I strive to understand needs and
          deliver results that resonate.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to="/projects"
          className="flex w-fit gap-2 border border-[rgba(255,255,255,0.116)] transition-[color,background-color,border-color] duration-150 ease-in-out cursor-pointer py-3 px-6 text-black font-f2 font-medium rounded-full bg-white hover:bg-white hover:text-black max-sm:text-[0.875rem] max-sm:py-2.5 max-sm:px-4.5 max-sm:text-black max-sm:bg-white"
        >
          See More Works
        </Link>
      </motion.div>
    </div>
  );
});

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-black text-white overflow-clip pt-20 pb-8 max-sm:py-16"
    >
      {isMobile ? <MobileProjects /> : <DesktopProjects />}
    </section>
  );
}
