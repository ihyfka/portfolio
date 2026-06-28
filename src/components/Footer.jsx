import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <motion.div
        className="flex flex-col gap-[2rem] flex-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex flex-row gap-[3rem] items-stretch">
          <div className="flex flex-col flex-wrap gap-[2rem]">
            <div className="flex gap-[2rem] mt-6 max-[640px]:gap-5">
              <a
                href="https://linkedin.com/in/obinnamoses"
                className="text-[#9ca3af] font-f2 font-semibold tracking-[0.05em] no-underline transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/ihyfka"
                className="text-[#9ca3af] font-f2 font-semibold tracking-[0.05em] no-underline transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                href="https://x.com/ihyfka"
                className="text-[#9ca3af] font-f2 font-semibold tracking-[0.05em] no-underline transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <a
                href="mailto:ihyfka@gmail.com"
                className="text-[#9ca3af] font-f2 font-semibold tracking-[0.05em] no-underline transition-colors duration-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAIL
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl flex-nowrap mx-auto text-center font-f2 text-[14px] bg-black text-[#9ca3af]">
          © All rights reserved · {new Date().getFullYear()}
        </div>
      </motion.div>
    </>
  );
}
