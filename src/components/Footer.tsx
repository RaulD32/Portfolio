import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Correo */}
        <a
          href="mailto:tuemail@ejemplo.com"
          className="text-lg text-gray-400 hover:text-cyan-400 transition"
        >
          tuemail@ejemplo.com
        </a>

        {/* Derechos */}
        <p className="text-lg text-center md:text-left">
          &copy; {new Date().getFullYear()} Raúl Díaz. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-8 text-gray-400 text-2xl">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/tuusuario"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-neutral-700"></div>
    </footer>
  );
};

export default Footer;
