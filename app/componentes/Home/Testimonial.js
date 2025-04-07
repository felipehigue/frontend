export default function Testimonial() {
    return (
      <section className="mb-12">
        <h2 className="text-3xl text-center mb-10 text-gray-800">Lo que dicen nuestros clientes</h2>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
          <p className="italic text-lg text-gray-700 leading-loose mb-5">
            Los productos de AccessPoint han transformado completamente mi hogar. Ahora tengo control total sobre mi casa incluso cuando estoy fuera. ¡La instalación fue muy sencilla y el soporte técnico es excelente!
          </p>
          <p className="text-gray-800 font-bold">María González</p>
          <p className="text-gray-600 text-sm">Cliente desde 2023</p>
        </div>
      </section>
    );
  }