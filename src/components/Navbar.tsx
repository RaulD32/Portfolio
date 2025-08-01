import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 text-gray-300 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <ul className="hidden md:flex gap-16 text-lg font-semibold items-center justify-center flex-1">
          {['Inicio','Sobre mí', 'Tecnologías', 'Proyectos'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-white transition-colors duration-300 px-2 py-1 rounded-md hover:bg-gray-700"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden hover:text-gray-400 transition-colors duration-200 p-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Menú móvil"
          title="Menú móvil"
        >
          {open ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
          open ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <ul
          className="flex flex-col gap-2 px-6 pb-4 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black rounded-b-md
            shadow-lg text-sm font-medium text-gray-300 items-center border-t border-gray-700"
        >
          {['Inicio','Sobre mí', 'Tecnologías', 'Proyectos'].map((item, i, arr) => (
            <li
              key={item}
              className={`w-full text-center ${
                i < arr.length - 1 ? 'border-b border-gray-700' : ''
              }`}
            >
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded-md transition-transform duration-150 hover:text-white hover:bg-gray-700 hover:scale-105"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
