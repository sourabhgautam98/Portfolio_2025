import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaFigma,
} from "react-icons/fa";
import { SiAdobexd, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  {
    icon: FaReact,
    name: "React",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-white",
    hoverColor: "hover:text-gray-300",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    color: "text-yellow-500",
    hoverColor: "hover:text-yellow-600",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: FaHtml5,
    name: "HTML5",
    color: "text-orange-500",
    hoverColor: "hover:text-orange-600",
  },
  {
    icon: FaCss3,
    name: "CSS3",
    color: "text-blue-700",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: FaFigma,
    name: "Figma",
    color: "text-purple-500",
    hoverColor: "hover:text-purple-600",
  },
  {
    icon: SiAdobexd,
    name: "Adobe XD",
    color: "text-pink-500",
    hoverColor: "hover:text-pink-600",
  },
];

const About = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-6xl font-bold text-white">About Me</h2>
          <h3 className="text-2xl font-semibold text-gray-300">
            Front End Developer
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate UI/UX Developer with experience in designing and
            developing modern, user-centric web applications. I specialize in
            creating intuitive, responsive interfaces using React.js, Next.js,
            and industry-standard design tools like Figma. With a strong
            foundation in design thinking, user research, and front-end
            development, I aim to craft seamless digital experiences that
            enhance usability and engagement. My goal is to bridge the gap
            between design and technology, delivering solutions that are both
            aesthetically pleasing and functionally efficient.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {skill.icon ? (
                  <Icon
                    className={`text-5xl ${skill.color} ${skill.hoverColor} transition-colors`}
                  />
                ) : (
                  <span className={`text-5xl ${skill.color}`}>?</span>
                )}
                <span className="mt-2 text-gray-300">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
