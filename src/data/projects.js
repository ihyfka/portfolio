/**
 * PROJECTS DATA
 * Required: id, slug, title, stack, image, desc.
 * Optional: client, year, role, liveUrl, repoUrl, longDesc
 **/

export const projects = [
  {
    id: 1,
    slug: "mahmet-global",
    title: "Mahmet Global Ltd",
    stack: ["React", "Tailwind", "REST", "Javascript"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",

    image2:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    desc: "A Northern Nigeria-based real estate and construction firm delivering secure, culturally adapted, and transparent infrastructure with cost-effective modern designs.",

    client: "Mahmet Global",
    year: "2026",
    role: "Web Developer",
    liveUrl: "https://mg-global.pages.dev",
    repoUrl: "",
    longDesc:
      "Mahmet Global Limited required a digital presence that reflected their positioning as a trusted infrastructure partner across Northern Nigeria. The platform was built with React and Tailwind CSS, integrating REST APIs for property listings and project showcases. Key challenges included adapting layouts for low-bandwidth environments and ensuring the interface communicated trust and professionalism to a local audience.",
  },
  {
    id: 2,
    slug: "velo",
    title: "Velo",
    stack: ["Express", "Node", "React", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    desc: "A modern blogging platform where ideas come to life. Write, publish, and share engaging stories with a clean, intuitive experience designed for hobbyists and readers alike.",

    client: "Personal",
    year: "2025",
    role: "Full-stack Developer",
    liveUrl: "https://velo.name.ng",
    repoUrl: "",
    longDesc:
      "Velo was built to provide a clean, responsive space for creating and managing engaging blog-like posts. Developed with a modern toolstack, it features authentication, rich text editing, and secure content management. Key challenges included implementing protected routes, managing application state, ensuring responsive design, and building reusable, maintainable components while delivering a smooth user experience.",
  },
  {
    id: 3,
    slug: "token-watch",
    title: "TokenWatch",
    stack: ["Node", "Axios", "React", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1777541743077-de523b619fb3?w=500&auto=format&fit=crop&q=60",
    desc: "A modern cryptocurrency dashboard showcasing market trends, featured coins, aggregated news, and key market insights. through a clean, responsive interface.",

    client: "Personal",
    year: "2025",
    role: "Full-stack Developer",
    liveUrl: "https://tokenwatch.onrender.com",
    repoUrl: "",
    longDesc:
      "TokenWatch is an experimental cryptocurrency market dashboard designed to help users stay informed with trending coins, aggregated news from multiple sources, and essential market metrics in a clean, responsive interface. The project emphasizes intuitive navigation, modern UI design, and component reusability. Development focused on presenting complex financial information in a clear and user-friendly format.",
  },
];
