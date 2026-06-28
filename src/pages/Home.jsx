import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-color color-text-primary">
      {showNavbar && <Navbar />}
      <main className="flex flex-col items-center overflow-x-clip">
        <Hero ref={heroRef} />
        <About />
        <Projects />
        <Expertise />
        <Contact />
      </main>
    </div>
  );
}
