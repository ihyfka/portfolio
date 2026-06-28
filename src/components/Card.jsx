import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/* Card styles based on offset from active card */
function getTransform(offset) {
  if (offset === 0) return { x: "0%", rotate: 0, scale: 1, zIndex: 20 };
  if (offset === 1) return { x: "8%", rotate: 8, scale: 0.85, zIndex: 15 };
  if (offset === 2) return { x: "3%", rotate: -9, scale: 0.8, zIndex: 10 };
  if (offset >= 3) return { x: "2%", rotate: 11, scale: 0.75, zIndex: 5 };
  /* Past cards (offset < 0): bury behind the stack */
  if (offset === -1)
    return { x: "-8%", rotate: -8, scale: 0.85, zIndex: 15, opacity: 0.8 };
  if (offset === -2)
    return { x: "-3%", rotate: 9, scale: 0.8, zIndex: 10, opacity: 0.8 };
  return { x: "-2%", rotate: -11, scale: 0.8, zIndex: 5 };
}

export function Card({ index, activeIndex, card, stack = [], onSwipe }) {
  const offset = index - activeIndex;
  const { x, rotate, scale, zIndex } = getTransform(offset);

  const handleDragEnd = (e, info) => {
    const swipeThreshold = 50; // px
    if (info.offset.x < -swipeThreshold) {
      onSwipe?.("left");
    } else if (info.offset.x > swipeThreshold) {
      onSwipe?.("right");
    }
  };

  return (
    <>
      <motion.div
        className={`absolute inset-0 flex flex-col justify-around gap-3.5 h-full w-full py-5 px-5 ${offset !== 0 ? "bg-[#2a2a2a]" : "bg-[#131313] border border-[#fff2]"} rounded-card shadow-[0_12px_60px_rgba(0,0,0,0.7),0_2px_8px_rgba(0,0,0,0.5)] will-change-transform cursor-default touch-pan-y group max-[900px]:inset-0 max-[900px]:my-auto max-[900px]:h-min max-sm:rounded-[20px]`}
        drag={offset === 0 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
        animate={{ x, rotate, scale }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        style={{ zIndex }}
      >
        <div className="w-full relative">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-57.5 object-cover rounded-card-img transition-[filter] duration-200 ease-linear group-hover:brightness-[0.7] max-[760px]:h-45 max-[425px]:h-[clamp(200px,50vw,280px)] max-sm:rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-3 font-f2">
          <div className="flex justify-between">
            <h2 className="text-[30px] font-f2 max-[900px]:text-[clamp(1.3rem,2.5vw,2rem)] max-sm:text-[clamp(1.2rem,6vw,1.5rem)]">
              {card.title}
            </h2>
            {offset === 0 && (
              <Link
                to={`/projects/${card.slug ?? card.title}`}
                className="w-10 h-10 bg-[#1f1f1f] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center text-white opacity-0 scale-[0] transition-[opacity,transform,background-color] duration-300 ease-in-out z-10 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 max-sm:opacity-100 max-sm:scale-100 hover:bg-[rgba(255,255,255,0.3)]"
              >
                <ArrowUpRight size={24} />
              </Link>
            )}
          </div>
          <span className="block flex-1 overflow-hidden text-[16px] text-[#9ca3af] max-[900px]:line-clamp-4 max-[900px]:text-[clamp(0.85rem,1.5vw,17px)] max-sm:line-clamp-3 max-sm:text-pill max-sm:leading-7">
            {card.desc}
          </span>
          <div className="flex flex-wrap">
            {stack.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center py-1.25 px-2.5 m-[5px_5px_0] bg-[#1f1f1f] rounded-full border border-[rgba(255,255,255,0.116)] text-[0.8rem] max-sm:py-1 max-sm:px-2.5 max-sm:text-body-xs max-sm:mt-1.75"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
