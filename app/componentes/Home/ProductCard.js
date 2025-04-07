import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-xl transition-all">
      <div 
        className="h-48 bg-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className="p-5">
        <h3 className="text-lg mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
        <p className="font-bold text-gray-800 text-xl mb-4">${product.price}</p>
        <Link 
          href="#" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition-all"
        >
          Añadir al carrito
        </Link>
      </div>
    </div>
  );
}