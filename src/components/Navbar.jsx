import { Home, Info, CodeXml, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /* active section detector */
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 70;

      if (isAtBottom) {
        setActiveSection("contact");
      } else {
        const sections = document.querySelectorAll("section[id]");
        const triggerPoint = currentScrollY + window.innerHeight * 0.3;
        let current = "hero";

        sections.forEach((section) => {
          if (section.offsetTop <= triggerPoint) {
            current = section.id;
          }
        });

        setActiveSection(current);
      }

      /* nav toggle display */
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > 70) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-3.75 z-50 flex justify-center w-full px-4 transition-transform duration-300 ease-in-out max-[500px]:top-2.5 max-[500px]:px-3 ${
        isVisible ? "translate-y-0" : "translate-y-[-150%]"
      }`}
    >
      <nav className="bg-[rgba(10,10,10,0.55)] backdrop-blur-[7px] text-white rounded-full p-1.75 flex items-center gap-3 shadow-lg max-w-fit border border-[rgba(255,255,255,0.116)] max-[700px]:gap-2.5 max-[500px]:p-1.5">
        <button
          onClick={() => scrollTo("hero")}
          className={`text-[17px] leading-5 font-semibold py-3 px-4 flex items-center gap-1.75 transition-colors duration-150 ease-in-out bg-transparent border-none rounded-[inherit] cursor-pointer max-[500px]:p-[0.65rem] max-[500px]:min-w-11 max-[500px]:min-h-11 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center max-[500px]:rounded-full ${
            activeSection === "hero"
              ? "text-black bg-white [&_svg]:stroke-[2.5] min-[701px]:[&_svg]:inline"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          <Home
            size={18}
            className={`max-[500px]:w-5.5 max-[500px]:h-5.5 ${activeSection !== "hero" ? "min-[701px]:hidden" : ""}`}
          />

          <span className="inline font-f2 text-[16px] max-[700px]:hidden">
            Home
          </span>
        </button>
        <button
          onClick={() => scrollTo("about")}
          className={`text-[17px] leading-5 font-semibold py-3 px-4 flex items-center gap-1.75 transition-colors duration-150 ease-in-out bg-transparent border-none rounded-[inherit] cursor-pointer max-[500px]:p-[0.65rem] max-[500px]:min-w-11 max-[500px]:min-h-11 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center max-[500px]:rounded-full ${
            activeSection === "about"
              ? "text-black bg-white [&_svg]:stroke-[2.5] min-[701px]:[&_svg]:inline"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          <Info
            size={18}
            className={`max-[500px]:w-5.5 max-[500px]:h-5.5 ${activeSection !== "about" ? "min-[701px]:hidden" : ""}`}
          />

          <span className="inline font-f2 text-[16px] max-[700px]:hidden">
            About
          </span>
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className={`text-[17px] leading-5 font-semibold py-3 px-4 flex items-center gap-1.75 transition-colors duration-150 ease-in-out bg-transparent border-none rounded-[inherit] cursor-pointer max-[500px]:p-[0.65rem] max-[500px]:min-w-11 max-[500px]:min-h-11 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center max-[500px]:rounded-full ${
            activeSection === "projects"
              ? "text-black bg-white [&_svg]:stroke-[2.5] min-[701px]:[&_svg]:inline"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          <CodeXml
            size={18}
            className={`max-[500px]:w-5.5 max-[500px]:h-5.5 ${activeSection !== "projects" ? "min-[701px]:hidden" : ""}`}
          />

          <span className="inline font-f2 text-[16px] max-[700px]:hidden">
            Projects
          </span>
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className={`text-[17px] leading-5 font-semibold py-3 px-4 flex items-center gap-1.75 transition-colors duration-150 ease-in-out bg-transparent border-none rounded-[inherit] cursor-pointer max-[500px]:p-[0.65rem] max-[500px]:min-w-11 max-[500px]:min-h-11 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center max-[500px]:rounded-full ${
            activeSection === "contact"
              ? "text-black bg-white [&_svg]:stroke-[2.5] min-[701px]:[&_svg]:inline"
              : "text-[#9ca3af] hover:text-white"
          }`}
        >
          <Mail
            size={18}
            className={`max-[500px]:w-5.5 max-[500px]:h-5.5 ${activeSection !== "contact" ? "min-[701px]:hidden" : ""}`}
          />

          <span className="inline font-f2 text-[16px] max-[700px]:hidden">
            Contact
          </span>
        </button>
      </nav>
    </div>
  );
}
