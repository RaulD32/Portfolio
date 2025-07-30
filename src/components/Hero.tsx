import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Hero = () => {
  return (
    <section className="h-[85vh] bg-neutral-950 text-white flex items-start justify-center px-6 pt-35">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Hola, soy <span className="text-cyan-400">Raúl Díaz</span>
          </h1>

          <p className="text-md md:text-lg text-cyan-300 font-semibold tracking-wide">
            Desarrollador Jr | Estudiante de Ingeniería en Desarrollo y Gestión de Software en Universidad Tecnológica de Cancún
          </p>

          <p className="text-xl text-gray-300 leading-relaxed">
            Diseño soluciones modernas y funcionales usando tecnologías web.<br />
            React, VUE, Angular, .NET, Laravel, Express, Nest.
          </p>

          {/* Redes sociales + correo */}
          <div className="flex gap-6 items-center text-gray-300 text-2xl">
            <a href="mailto:raul.diaz@ejemplo.com" className="hover:text-cyan-400 transition" title="Correo">
              <MdEmail />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" className="hover:text-cyan-400 transition" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" className="hover:text-cyan-400 transition" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/tuusuario" target="_blank" className="hover:text-cyan-400 transition" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/tuusuario" target="_blank" className="hover:text-cyan-400 transition" title="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex justify-center">
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gray-700/20 border-4 border-cyan-400 overflow-hidden shadow-xl">
            <img
              src="/tu-foto.jpg"
              alt="Raúl Díaz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
