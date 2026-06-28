import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import Footer from "../components/Footer";

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cellVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rowA = [1, 1.8, 1.1];
const rowB = [1.6, 1.2, 1];

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

function GalleryRow({ row, flexValues }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-8 sm:gap-6 h-auto sm:h-55 md:h-65"
      variants={rowVariants}
      initial="hidden"
      animate="visible"
    >
      {row.map((project, colIdx) => (
        <GalleryCell
          key={project.id}
          project={project}
          flexValue={flexValues[colIdx] ?? 1}
        />
      ))}
    </motion.div>
  );
}

function GalleryCell({ project, flexValue }) {
  const navigate = useNavigate();

  const go = () => navigate(`/projects/${project.slug ?? project.title}`);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[14px] cursor-pointer transition-all duration-300 ease-in-out after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_0_rgba(255,255,255,0.133)] after:transition-shadow after:duration-300 after:ease-in-out after:z-10 hover:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.133)] w-full h-62.5 max-sm:flex-none! max-sm:block sm:h-full"
      style={{ flex: flexValue }}
      variants={cellVariants}
      onClick={go}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && go()}
      aria-label={`View ${project.title}`}
    >
      {/* photo */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out pointer-events-none group-hover:scale-[1.04]"
        loading="lazy"
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent via-50%" />

      {/* tint */}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2 z-20">
        <span className="font-f2 text-white text-base font-semibold leading-[1.4] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {project.title}
        </span>

        <div className="flex flex-wrap gap-1.5 max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out group-hover:max-h-12 group-hover:min-h-fit">
          {project.stack.slice(0, 3).map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center px-[0.6rem] py-1 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-[0.7rem] text-white/90"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AllProjects() {
  const rows = chunk(projects, 3);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-f2 px-6 sm:px-16 pt-8 pb-16 gap-12">
      <div className="w-full max-w-6xl mx-auto mb-0 sm:mb-4 md:mb-12">
        <div className="flex items-center py-4 pb-10 sm:pt-8 sm:pb-16">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-gray-500 text-base no-underline transition-colors duration-200 ease-linear -tracking-body hover:text-white"
          >
            <ArrowLeft size={18} />
            Home
          </Link>
        </div>

        <div className="flex max-w-280 mx-auto items-end justify-between gap-6 flex-wrap">
          <motion.h1
            className="font-f1 text-[clamp(3rem,14vw,5rem)] sm:text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-[-0.05em] leading-heading uppercase m-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            PROJECTS
          </motion.h1>

          <motion.p
            className="text-[0.8rem] text-gray-600 tracking-[0.08em] uppercase mb-[0.35rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {projects.length} works
          </motion.p>
        </div>

        <motion.div
          className="w-full h-px bg-white/10 mt-4 sm:mt-8"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-280 w-full mx-auto flex flex-col gap-8 sm:gap-6">
        {rows.map((row, rowIdx) => {
          const flexValues = rowIdx % 2 === 0 ? rowA : rowB;
          return <GalleryRow key={rowIdx} row={row} flexValues={flexValues} />;
        })}
      </div>

      <div className="flex flex-col items-center border-t mt-5 border-[rgba(255,255,255,0.116)]">
        <Footer />
      </div>
    </div>
  );
}
