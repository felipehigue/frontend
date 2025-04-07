import Navbar from '../componentes/Home/Navbar';
import Hero from '../componentes/Home/Hero';
import ProductCard from '../componentes/Home/ProductCard';
import Features from '../componentes/Home/Features';
import Testimonial from '../componentes/Home/Testimonial';
import Newsletter from '../componentes/Home/Newsletter';
import Footer from '../componentes/Home/Footer';

import camara from "../../public/img/camara.jpg"
import cerradura from '../../public/img/cerradura.jpg';
import hub from '../../public/img/hub.jpg';
import termostato from '../../public/img/termostato.jpg';

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Smart Lock Pro",
      description: "Cerradura inteligente con reconocimiento facial y huella digital.",
      price: "149.99",
      image: cerradura
    },
    {
      id: 2,
      name: "Cámara de seguridad 360°",
      description: "Visión nocturna, detección de movimiento y audio bidireccional.",
      price: "99.99",
      image: camara
    },
    {
      id: 3,
      name: "Termostato inteligente",
      description: "Control de temperatura con aprendizaje automático y ahorro energético.",
      price: "129.99",
      image: termostato
    },
    {
      id: 4,
      name: "Hub de control central",
      description: "Controla todos tus dispositivos desde un solo lugar con asistente de voz.",
      price: "199.99",
      image: hub
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 mt-16 p-5">
        <Hero />

        <h2 className="text-3xl text-center my-10 text-gray-800">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Features />
        <Testimonial />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
