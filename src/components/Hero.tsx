import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        #Inicio {
          scroll-margin-top: 5rem; /* Ajusta según el alto de tu header o espacio que quieras */
        }
      `}</style>

      <section
        id="Inicio"
        className="min-h-[85vh] bg-neutral-950 text-white flex items-start justify-center px-6 pt-5 sm:pt-25"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Texto + Imagen */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left max-w-xl mx-auto md:mx-0">

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
              Hola, soy <span className="text-cyan-400">Raúl Díaz</span>
            </h1>

            {/* Imagen justo debajo del nombre */}
            <div className="flex justify-center md:hidden">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gray-700/20 border-4 border-cyan-400 overflow-hidden shadow-xl">
                <img
                  src="/RD.jpg"
                  alt="Raúl Díaz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-sm sm:text-md md:text-lg text-cyan-300 font-semibold tracking-wide">
              Desarrollador Jr | Estudiante de Ingeniería en Desarrollo y Gestión de Software en Universidad Tecnológica de Cancún
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Diseño soluciones modernas y funcionales usando tecnologías web.<br />
              React, Vue, Angular, .NET, Laravel, Express, Nest.
            </p>

            {/* Redes sociales */}
            <div className="flex justify-center md:justify-start gap-6 items-center text-gray-300 text-2xl">
              <a href="https://github.com/RaulD32" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-ra%C3%BAl-d%C3%ADaz-1258422b4/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Imagen en desktop */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="w-72 h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gray-700/20 border-4 border-cyan-400 overflow-hidden shadow-xl">
              <img
                src="/RD2.jpg"
                alt="Raúl Díaz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
