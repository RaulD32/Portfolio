import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Correo */}
        <a
          href="mailto:joserauldiaz779@gmail.com"
          className="flex items-center gap-2 text-lg text-gray-400 hover:text-cyan-400 transition"
        >
          <FaEnvelope className="text-xl" />
          joserauldiaz779@gmail.com
        </a>

        {/* Derechos */}
        <p className="text-lg text-center md:text-left">
          &copy; {new Date().getFullYear()} Raúl Díaz. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-8 text-gray-400 text-2xl">
          <a
            href="https://github.com/RaulD32"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-ra%C3%BAl-d%C3%ADaz-1258422b4/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-neutral-700"></div>
    </footer>
  );
};

export default Footer;
