import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWindows,
  FaApple,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiExpress,
    SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function SkillsSection() {
  const sections = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "", icon: <TbBrandCSharp /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
          { name: "Vue", icon: <FaVuejs /> },
        { name: "Angular", icon: <FaAngular /> },
        
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "", icon: <SiDotnet /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "NestJS", icon: <SiNestjs /> },
      ],
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
          { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Postgresql", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Sistemas Operativos",
      skills: [
        { name: "Windows", icon: <FaWindows /> },
        { name: "macOS", icon: <FaApple /> },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-neutral-950 text-white" id="Tecnologías">
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
        Tecnologías con las que he trabajado
      </h2>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-neutral-800/60 p-6 rounded-xl border border-neutral-700 shadow-sm hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-200">{section.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {section.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}