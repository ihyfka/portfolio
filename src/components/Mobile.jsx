import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectsHeader } from "./Projects";
import { Card } from "./Card";

export default function MobileProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = projects.slice(0, 4);
  const N = featured.length;

  const handleSwipe = (direction) => {
    if (direction === "left") {
      if (activeIndex < N - 1) {
        setActiveIndex(activeIndex + 1);
      }
    } else if (direction === "right") {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <ProjectsHeader />

      <div className="w-full max-w-95 h-130 relative mt-4">
        <div
          className="sticky top-0 w-full h-max flex items-center justify-center"
          style={{ position: "relative" }}
        >
          <div className="flex items-center relative w-95 h-125 min-h-fit overflow-visible max-sm:items-center max-sm:w-full max-sm:max-w-81.25 max-sm:h-125 max-sm:relative">
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
      <div className="text-body-xs font-semibold text-[#9ca3af] text-right w-full max-sm:px-6">
        (Swipe)
      </div>
    </div>
  );
}
