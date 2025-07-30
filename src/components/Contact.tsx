const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Mensaje" className="w-full border px-4 py-2 rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
