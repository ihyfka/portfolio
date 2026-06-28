import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { slug } = useParams();
  const slugify = (str) =>
    String(str).trim().toLowerCase().replace(/\s+/g, "-");

  const project = projects.find(
    (p) => p.slug === slug || slugify(p.title) === slug,
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h2>Project not found</h2>
        <Link
          className="inline-flex items-center gap-2 text-[#9ca3af] no-underline font-medium transition-colors duration-200 ease-linear hover:text-white"
          to="/projects"
        >
          <ArrowLeft size={18} /> All Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white py-8 px-16 pb-16 font-f2 max-lg:px-8 max-sm:px-6">
        <div className="py-8 pb-16 max-sm:py-4 max-sm:pb-10">
          <Link
            className="inline-flex items-center gap-2 text-[#9ca3af] no-underline font-medium transition-colors duration-200 ease-linear hover:text-white"
            to="/projects"
          >
            <ArrowLeft size={18} /> All Projects
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-200 mx-auto flex flex-col gap-[3rem]"
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h1 className="font-f1 text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-heading uppercase tracking-[-0.05em] m-0 max-sm:text-[3rem]">
              {project.title}
            </h1>
          </div>

          <div className="max-w-3xl">
            <p className="text-[#9ca3af] text-body-lg leading-[1.8] max-sm:text-base">
              {project.longDesc || project.desc}
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <div className="flex-1 overflow-hidden">
              <div className="w-100% flex gap-2 whitespace-nowrap overflow-x-auto">
                {project.year && (
                  <span className="inline-flex items-center py-1.5 px-3.5 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] rounded-full text-[0.8rem] text-[#e5e7eb] -tracking-body shrink-0">
                    {project.year}
                  </span>
                )}
                {project.stack.map((s, idx) => (
                  <span
                    key={idx}
                    className="flex items-center justify-center py-2 px-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full text-[0.875rem] backdrop-blur-[10px] shrink-0"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center shrink-0">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.4rem] py-3 px-6 rounded-full text-[1rem] font-semibold no-underline bg-white text-black transition-[background,opacity] duration-200 ease-linear border border-transparent hover:opacity-[0.85]"
                >
                  Visit Project
                  <ExternalLink size={18} strokeWidth={2.5} />
                </a>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.4rem] py-3 px-6 rounded-full text-[1rem] font-semibold no-underline bg-white text-black transition-[background,opacity] duration-200 ease-linear border border-transparent hover:opacity-[0.85]"
                >
                  Ongoing
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[0.4rem] py-3 px-6 rounded-full text-[1rem] font-semibold no-underline bg-transparent text-white border border-[rgba(255,255,255,0.2)] transition-[background,opacity] duration-200 ease-linear hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100"
                >
                  Source
                </a>
              )}
            </div>
          </div>

          <div className="w-full rounded-3xl overflow-hidden mt-5 mb-3">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[70vh] object-cover block"
            />
          </div>

          <div className="w-full rounded-3xl overflow-hidden">
            {project.image2 && (
              <img
                src={project.image2}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-cover block"
              />
            )}
          </div>
          <div className="flex flex-col items-center border-t mt-5 border-[rgba(255,255,255,0.116)]">
            <Footer />
          </div>
        </motion.div>
      </div>
    </>
  );
}
