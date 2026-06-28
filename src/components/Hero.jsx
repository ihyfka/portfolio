import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import clipped from "../assets/images/clipped2.webp";

export default function Hero() {
  const sectionRef = useRef(null);
  const target = useRef({ x: 0, y: 0 }); /* current mouse position */
  const current = useRef({ x: 0, y: 0 }); /* current gradient position */

  useEffect(() => {
    let animationFrameId;

    /* centered graadient initially before any pointer movement */
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      target.current = { x: rect.width / 2, y: rect.height / 2 };
      current.current = { x: rect.width / 2, y: rect.height / 2 };
    }

    const animateLight = () => {
      // Lerp formula: current = current + (target - current) * friction
      // Lower friction (e.g., 0.04) = more delay/lag. Higher = faster catch-up.
      current.current.x += (target.current.x - current.current.x) * 0.04;
      current.current.y += (target.current.y - current.current.y) * 0.04;

      if (sectionRef.current) {
        sectionRef.current.style.setProperty(
          "--mouse-x",
          `${current.current.x}px`,
        );
        sectionRef.current.style.setProperty(
          "--mouse-y",
          `${current.current.y}px`,
        );
      }

      animationFrameId = requestAnimationFrame(animateLight);
    };

    animateLight();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-black min-h-dvh flex flex-col items-center justify-center [--mouse-x:50vw] [--mouse-y:50vh] max-[500px]:pt-[10vh] max-[500px]:h-auto max-[500px]:pb-24 max-[500px]:justify-start max-[500px]:overflow-y-visible"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* soft-light gradient */}
      <div className="absolute inset-0 pointer-events-none z-0" />

      <div
        className="absolute inset-0 flex justify-center items-end pointer-events-none z-2 max-[500px]:relative max-[500px]:order-2 max-[500px]:inset-auto max-[500px]:mb-6"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-auto min-h-125 max-h-[80vh] max-w-[100vw] object-contain grayscale max-[500px]:max-h-[50vh] max-[500px]:mb-0"
          src={clipped}
          alt="Moses Obinna"
        />
      </div>

      <div className="relative w-full text-center mb-10 z-1 max-[500px]:order-1 max-[500px]:mb-4">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[clamp(3rem,18vw,17vw)] font-bold tracking-[-0.03em] text-white whitespace-nowrap mix-blend-difference leading-none font-f1 select-auto [-webkit-text-stroke:1px_rgba(255,255,255,0.133)]"
        >
          Web Developer
        </motion.h1>
      </div>

      <div className="flex justify-between w-full px-8 py-4 z-3 max-[700px]:pb-8 max-[500px]:absolute max-[500px]:bottom-[20%] max-[500px]:flex-col max-[500px]:order-2 max-[500px]:items-end max-[500px]:gap-6 max-[500px]:px-6 max-[500px]:py-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-60 w-[30%] font-medium max-[700px]:max-w-[20rem] max-[500px]:max-w-full max-[500px]:w-[70%] max-[500px]:text-right"
        >
          <p className="font-f1 text-[25px] leading-normal text-white mix-blend-difference font-medium tracking-body">
            Moses Obinna
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-60 w-[30%] font-medium text-right max-[500px]:max-w-full max-[500px]:w-[70%] max-[500px]:text-right"
        >
          <p className="font-f2 text-body-lg leading-normal text-[#9ca3af] mix-blend-difference font-medium tracking-body max-[700px]:text-[16px]">
            Building intuitive, high-performance digital experiences from the
            ground up.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-body-xs font-semibold text-[#9ca3af] z-3">
        (Scroll down)
      </div>
    </section>
  );
}
