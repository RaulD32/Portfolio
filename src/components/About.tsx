const About = () => {
  return (
    <section className="bg-neutral-900 text-white py-10 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
          Sobre mí
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          
          <div className="bg-neutral-800/60 p-4 rounded-xl shadow-sm border border-neutral-700 hover:border-cyan-400 transition">
            <h3 className="text-base font-semibold mb-2">¿Quién soy?</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Soy <span className="font-semibold text-white">Desarrollador de software</span> con experiencia en aplicaciones web usando <span className="text-cyan-300">React, Vue, .NET y Laravel</span>. Me enfoco en diseñar soluciones funcionales, modernas y escalables.
            </p>
          </div>

          
          <div className="bg-neutral-800/60 p-4 rounded-xl shadow-sm border border-neutral-700 hover:border-cyan-400 transition">
            <h3 className="text-base font-semibold mb-2">Formación</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Estudiante de <span className="font-semibold text-white">Ingeniería en Desarrollo y Gestión de Software</span> en la <span className="text-cyan-300">Universidad Tecnológica de Cancún</span>. Combino conocimientos técnicos con enfoque en gestión y buenas prácticas.
            </p>
          </div>

          
          <div className="bg-neutral-800/60 p-4 rounded-xl shadow-sm border border-neutral-700 hover:border-cyan-400 transition">
            <h3 className="text-base font-semibold mb-2">Mentalidad</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Me considero un <span className="text-white">solucionador de problemas activo</span>, con mentalidad analítica y pasión por aprender. Busco mejorar procesos y aportar soluciones creativas en equipo.
            </p>
          </div>

          
          <div className="bg-neutral-800/60 p-4 rounded-xl shadow-sm border border-neutral-700 hover:border-cyan-400 transition">
            <h3 className="text-base font-semibold mb-2">Tecnologías clave</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Trabajo con <span className="text-cyan-300">React, Vue, .NET, Laravel, Express y NestJS</span>. Me interesa escribir código limpio, mantener buenas prácticas y adaptarme a nuevas herramientas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
