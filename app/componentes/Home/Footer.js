import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 rounded-t-xl">
      <div className="flex flex-wrap justify-around max-w-6xl mx-auto mb-8">
        <div className="basis-1/4 min-w-[200px] mb-5 text-left px-4">
          <h3 className="text-blue-500 mb-4">AccessPoint</h3>
          <p className="text-gray-400 mb-4">
            Transformando hogares con tecnología inteligente desde 2018.
          </p>
          <div className="mt-4">
            <Link href="#" className="inline-block mr-4 text-white">📱</Link>
            <Link href="#" className="inline-block mr-4 text-white">📘</Link>
            <Link href="#" className="inline-block mr-4 text-white">📸</Link>
            <Link href="#" className="inline-block text-white">🐦</Link>
          </div>
        </div>

        <div className="basis-1/4 min-w-[200px] mb-5 text-left px-4">
          <h3 className="text-blue-500 mb-4">Enlaces rápidos</h3>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Inicio</Link>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Productos</Link>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Ofertas</Link>
          <Link href="#" className="block text-gray-400 hover:text-blue-500">Soporte</Link>
        </div>

        <div className="basis-1/4 min-w-[200px] mb-5 text-left px-4">
          <h3 className="text-blue-500 mb-4">Contacto</h3>
          <p className="text-gray-400 mb-2">info@accesspoint.com</p>
          <p className="text-gray-400 mb-2">+34 912 345 678</p>
          <p className="text-gray-400">Calle Innovación, 123, Madrid</p>
        </div>

        <div className="basis-1/4 min-w-[200px] mb-5 text-left px-4">
          <h3 className="text-blue-500 mb-4">Ayuda</h3>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Preguntas frecuentes</Link>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Envíos y devoluciones</Link>
          <Link href="#" className="block text-gray-400 mb-2 hover:text-blue-500">Términos y condiciones</Link>
          <Link href="#" className="block text-gray-400 hover:text-blue-500">Política de privacidad</Link>
        </div>
      </div>

      <div className="pt-5 border-t border-gray-700 text-gray-400">
        &copy; 2025 AccessPoint. Todos los derechos reservados.
      </div>
    </footer>
  );
}