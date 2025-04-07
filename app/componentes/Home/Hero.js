import Link from 'next/link';

export default function Hero() {
  return (
    <div 
      className="h-[500px] bg-gradient-to-r from-black/50 to-black/50 bg-cover bg-center text-white flex flex-col justify-center items-center text-center p-5 rounded-xl mb-10"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1200/500')" }}
    >
      <h1 className="text-5xl mb-5">El futuro de tu hogar está aquí</h1>
      <p className="text-xl max-w-[700px] mb-8">
        Descubre nuestra línea de productos inteligentes que transformarán la manera en que vives y te relacionas con tu hogar.
      </p>
      <Link href="#" className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all">
        Ver productos
      </Link>
    </div>
  );
}