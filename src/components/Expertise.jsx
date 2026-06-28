import { motion } from "framer-motion";

const frontendSkillSet = [
  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Framer Motion",
    i: "devicon-framermotion-original text-[20px] mr-2",
  },
  {
    id: 3,
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 5,
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 6,
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
];

const backendSkillSet = [
  {
    id: 1,
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    id: 2,
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 3,
    name: "Express",
    i: "devicon-express-original text-[20px] mr-2",
  },
  {
    id: 4,
    name: "POSTGres",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
  },
  {
    id: 5,
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
];

const otherSkillSet = [
  {
    id: 1,
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    id: 2,
    name: "Npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg",
  },
  {
    id: 3,
    name: "Github",
    i: "devicon-github-original text-[20px] mr-2",
  },
  {
    id: 4,
    name: "Ngrok",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrok/ngrok-original.svg",
  },

  {
    id: 5,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 6,
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

const pillCls =
  "flex items-center justify-center py-3 px-4 rounded-full bg-[rgba(255,255,255,0.04)] backdrop-blur-[12px] text-[rgba(255,255,255,0.8)] font-medium font-f2 transition-[opacity,transform,background-color] duration-300 ease-linear border border-[rgba(255,255,255,0.05)] hover:opacity-100 hover:bg-[rgba(255,255,255,0.08)] hover:text-white max-sm:py-[0.6rem] max-sm:px-[1.2rem] max-sm:text-[0.9rem] [&_img]:w-5 [&_img]:h-5 [&_img]:mr-2 [&_i]:text-[20px] [&_i]:mr-2";

export default function Expertise() {
  return (
    <section className="w-full bg-black text-white py-20 max-lg:py-20 max-sm:py-16">
      <div className="max-w-7xl mx-auto px-20 flex flex-col items-center max-lg:px-8 max-sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-section-title font-black tracking-[-0.05em] uppercase mb-12 leading-heading font-f1 text-white max-lg:text-section-title-tab max-sm:self-start max-sm:text-section-title-mobile max-sm:leading-heading-mobile max-sm:mb-8"
        >
          STACK
        </motion.h2>

        <div
          className="relative flex flex-col gap-6 w-[85%] overflow-hidden py-4 max-sm:w-[90%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="overflow-hidden whitespace-nowrap flex w-full">
            <div
              className="flex shrink-0 gap-0 w-max will-change-transform"
              style={{ animation: "marquee-left 25s linear infinite" }}
            >
              <div className="flex shrink-0 gap-4 pr-4">
                {[...frontendSkillSet, ...frontendSkillSet].map(
                  (skill, idx) => (
                    <span key={`${skill.id}-${idx}`} className={pillCls}>
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} />
                      ) : (
                        <i className={skill.i} />
                      )}
                      {skill.name}
                    </span>
                  ),
                )}
              </div>
              <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
                {[...frontendSkillSet, ...frontendSkillSet].map(
                  (skill, idx) => (
                    <span key={`${skill.id}-${idx}`} className={pillCls}>
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} />
                      ) : (
                        <i className={skill.i} />
                      )}
                      {skill.name}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="overflow-hidden whitespace-nowrap flex w-full">
            <div
              className="flex items-center shrink-0 gap-0 w-max will-change-transform"
              style={{ animation: "marquee-right 20s linear infinite" }}
            >
              <div className="flex shrink-0 gap-4 pr-4">
                {[...backendSkillSet, ...backendSkillSet].map((skill, idx) => (
                  <span key={`${skill.id}-${idx}`} className={pillCls}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <i className={skill.i} />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
                {[...backendSkillSet, ...backendSkillSet].map((skill, idx) => (
                  <span key={`${skill.id}-${idx}`} className={pillCls}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <i className={skill.i} />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden whitespace-nowrap flex w-full">
            <div
              className="flex items-center shrink-0 gap-0 w-max will-change-transform"
              style={{ animation: "marquee-left 15s linear infinite" }}
            >
              <div className="flex shrink-0 gap-4 pr-4">
                {[...otherSkillSet, ...otherSkillSet].map((skill, idx) => (
                  <span key={`${skill.id}-${idx}`} className={pillCls}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <i className={skill.i} />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
                {[...otherSkillSet, ...otherSkillSet].map((skill, idx) => (
                  <span key={`${skill.id}-${idx}`} className={pillCls}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <i className={skill.i} />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
