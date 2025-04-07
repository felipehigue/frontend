import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white fixed top-0 left-0 z-50 flex justify-between items-center py-3 px-5">
      <div className="text-center">
        <div className="text-2xl font-bold tracking-wider">AccessPoint</div>
      </div>
      <div className="flex items-center">
        <Link href="/home" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium bg-blue-600 border-b-4 border-green-500">Inicio</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Productos</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Soluciones</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Ofertas</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Soporte</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Blog</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Acerca de</Link>
        <Link href="#" className="px-5 py-2 text-gray-200 hover:bg-gray-700 transition-all font-medium">Contacto</Link>
      </div>
    </nav>
  );
}