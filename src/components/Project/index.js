import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ai Tools",
    description:
      "AI tools based on common functionalities in those categories: text-to-speech, text-to-image, and background remover.",
    technologies: [
      "Next.js",
      "Css",
      "React-Bootstap",
      "MUI",
      "Api Integration",
    ],
    image: "/assets/Ai-tools.png",
    type: "Website",
    projectUrl: "https://ai--tools.vercel.app/",
  },
   {
    id: 2,
    title: "pubg-website",
    description:
      "The website appears to be a fan-made or personal project dedicated to PUBG (PlayerUnknown’s Battlegrounds). It's built using modern web technologies, specifically Vite and React, which suggests a focus on performance and modular design.",
    technologies: [
      "React.js",
      "Tailwind",
      "GSAP",
    ],
    image: "/assets/pubg.png",
    type: "Website",
    projectUrl: "https://ai--tools.vercel.app/",
  },
  {
    id: 3,
    title: "News Look",
    description:
      "A news website that allows users to read and search for news articles from various sources.",
    technologies: ["React", "Css", "Api Integration"],
    image: "/assets/NewsLook.png",
    type: "Website",
    projectUrl: "https://newslook.vercel.app/",
  },
  {
    id: 4,
    title: "Rush-app-Case-Study",
    description:
      "This is a case study of an app which I have designed and you can find the Play store.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
    ],
    image: "/assets/rush.png",
    type: "Design",
    projectUrl: "https://www.behance.net/gallery/214947919/Rush-app-Case-Study",
  },
  {
    id: 5,
    title: "SMC-APP-Case-Study",
    description:
      "This is a case study of an app which I have designed and you can find the Play store.",
    technologies: [
      "Figma",
      "UI/UX Design",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
    ],
    image: "/assets/smc.png",
    type: "Design",
    projectUrl: "https://www.behance.net/gallery/211299697/SMC-APP-Case-Study",
  },
];
export default function ProjectsPage() {
  return (
    <div className="pt-20 bg-black">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Projects</h1>
          <p className="text-lg text-gray-300">
            A showcase of my work, featuring web applications, design projects,
            and experiments.
          </p>
        </div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div key={project.id} className="transition-all duration-300">
              <div className="grid gap-12 items-center grid-cols-1 md:grid-cols-2">
                <div className={index % 2 === 1 ? "order-2" : ""}>
                  <span className="text-8xl font-bold text-gray-700 transition-colors duration-300 block mb-6">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-4xl font-bold mb-6 text-white transition-transform duration-300">
                    {project.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-md text-lg font-medium text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
                <div
                  className={`overflow-hidden rounded-lg ${
                    index % 2 === 1 ? "order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
