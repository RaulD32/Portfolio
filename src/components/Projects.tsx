import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaDocker,
  FaPython,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiNestjs,
  SiDotnet,
} from "react-icons/si";

const projects = [
  {
    title: "Sistema de gestión de estadías",
    description: "Gestor de estadías para la Universidad Tecnológica de Cancún",
    icons: [<FaLaravel />, <SiTailwindcss />, <SiMysql />],
    image: "/portfoliordia/public/project1.png",
  },
  {
    title: "Ecommerce médico",
    description: "Venta y renta de mobiliario y equipo médico.",
    icons: [<FaLaravel />, <SiTailwindcss />, <SiMysql />],
    image: "/portfoliordia/public/project2.png",
  },
  {
    title: "Ecommerce de mascotas",
    description: "Accesorios y alimentos para mascotas.",
    icons: [<FaReact />, <SiExpress />, <SiTailwindcss />, <SiMysql />],
    image: "/portfoliordia/public/project3.png",
  },
  {
    title: "Sistema de gestión de gimnasio de yoga y pilates",
    description: "gestión de clases, membresías y pagos.",
    icons: [<FaVuejs />, <SiTailwindcss />, <SiNestjs />, <SiMysql />],
    image: "/portfoliordia/public/project4.png",
  },
  {
    title: "Plataforma tipo Indeed",
    description: "Publicación de ofertas laborales y búsqueda de empleos.",
    icons: [<FaAngular />, <SiDotnet />, <FaDocker />],
    image: "/portfoliordia/public/project5.png",
  },
  {
    title: "Sistema de análisis de ingresos",
    description: "Hecho con Vue, Flask y MySQL.",
    icons: [<FaVuejs />, <FaPython />, <SiMysql />],
    image: "/portfoliordia/public/project6.png",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-16 bg-neutral-950 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
        Proyectos Destacados
      </h2>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-neutral-800/60 p-6 rounded-xl border border-neutral-700 shadow-sm hover:border-cyan-400 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.icons.map((icon, i) => (
                <span
                  key={i}
                  className="text-xl text-gray-300 hover:text-cyan-400 transition"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
