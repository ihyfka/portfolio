import { motion } from "framer-motion";
import { Library } from "lucide-react";
import resumePdf from "../assets/file/Moses_Obinna_Resume.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white pt-20 pb-8 max-sm:pt-16 max-sm:pb-16"
    >
      <div className="max-w-280 mx-auto px-20 grid grid-cols-[0.5fr_1fr] gap-12 items-start text-left max-[900px]:grid-cols-1 max-sm:px-6 max-sm:gap-8">
        <div
          className="flex h-full items-center w-full max-[900px]:hidden"
          aria-hidden="true"
        >
          <Library
            style={{ scale: 0.9, height: "100%", width: "100%" }}
            strokeWidth={2}
            strokeLinecap="square"
          />
        </div>

        <div className="flex flex-col gap-8">
          <motion.h2
            className="text-section-title font-f1 leading-heading font-black tracking-[-0.05em] uppercase m-0 max-[900px]:text-section-title-tab max-sm:text-section-title-mobile"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ABOUT
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#9ca3af] text-left text-body-lg leading-body max-w-3xl font-f2 max-sm:text-base"
          >
            <p>
              I'm a software developer focused on crafting intuitive user
              interfaces and scalable web applications. I enjoy bridging design
              and engineering to create experiences that feel fast, polished,
              and reliable.
            </p>
            <p>
              My journey started with a focus on interfaces and visual design,
              but gradually expanded into application architecture, performance
              optimization, and backend systems.
            </p>
            <p>
              Today, I build full-stack web applications with an emphasis on
              thoughtful UI, maintainable code, and reliable performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="[&_button]:py-3 [&_button]:px-6 [&_button]:text-black [&_button]:font-f2 [&_button]:font-medium [&_button]:rounded-full [&_button]:cursor-pointer [&_button]:bg-white [&_button]:border [&_button]:border-[rgba(255,255,255,0.116)] [&_button]:transition-opacity [&_button]:duration-300 [&_button:hover]:opacity-90 max-sm:[&_button]:text-sm max-sm:[&_button]:py-2.5 max-sm:[&_button]:px-4.5"
          >
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">
              <button>See Resume</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
