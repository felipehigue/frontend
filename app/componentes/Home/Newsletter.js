export default function Newsletter() {
    return (
      <section className="bg-gray-700 py-12 px-5 rounded-xl mb-12 text-center text-white">
        <h2 className="text-2xl mb-5">Mantente informado</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Suscríbete a nuestro boletín para recibir las últimas novedades y ofertas exclusivas sobre productos inteligentes para el hogar.
        </p>
        <form className="flex max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-1 px-5 py-3 border-none rounded-l-full text-base"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-8 py-3 border-none rounded-r-full font-bold uppercase"
          >
            Suscribirse
          </button>
        </form>
      </section>
    );
  }