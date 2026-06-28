import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectsHeader } from "./Projects";
import { Card } from "./Card";

export default function DesktopProjects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = projects.slice(0, 4);
  const N = featured.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(Math.floor(latest * N), N - 1);
    setActiveIndex(next);
  });

  const scrollToCard = (index) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const trackTop = rect.top + scrollTop;
    const trackHeight = trackRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollRange = trackHeight - viewportHeight;

    const targetProgress = (index + 0.5) / N;
    const targetScrollY = trackTop + targetProgress * scrollRange;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      if (activeIndex < N - 1) {
        scrollToCard(activeIndex + 1);
      }
    } else if (direction === "right") {
      if (activeIndex > 0) {
        scrollToCard(activeIndex - 1);
      }
    }
  };

  return (
    <div className="max-w-280 mx-auto px-20 flex items-start gap-8 relative max-[900px]:px-6 max-[900px]:gap-8">
      <ProjectsHeader />

      <div
        ref={trackRef}
        className="w-1/2 relative"
        style={{ height: `${(N + 1) * 100}dvh` }}
      >
        <div className="sticky top-0 h-dvh flex items-center justify-center overflow-visible max-[900px]:py-8 max-sm:static max-sm:h-fit max-sm:p-0 max-sm:flex max-sm:items-center max-sm:justify-center">
          
          <div className="flex items-center relative w-95 h-125 min-h-fit overflow-visible max-[900px]:relative max-[900px]:w-[clamp(280px,40vw,400px)] max-sm:items-center max-sm:w-full max-sm:max-w-81.25 max-sm:h-125 max-sm:relative">
            {featured.map((card, index) => (
              <Card
                key={card.id}
                index={index}
                activeIndex={activeIndex}
                card={card}
                stack={card.stack ?? []}
                onSwipe={handleSwipe}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
