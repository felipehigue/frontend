export default function Features() {
    const features = [
      {
        icon: "🔒",
        title: "Seguridad Avanzada",
        description: "Protocolos de encriptación de última generación para mantener tu hogar y datos seguros."
      },
      {
        icon: "📱",
        title: "Control Total",
        description: "Gestiona todos tus dispositivos desde cualquier lugar con nuestra aplicación móvil intuitiva."
      },
      {
        icon: "💡",
        title: "Innovación Continua",
        description: "Actualizaciones periódicas y nuevas funcionalidades para mejorar tu experiencia."
      }
    ];
  
    return (
      <section className="py-12 bg-gray-100 rounded-xl mb-12">
        <h2 className="text-3xl text-center mb-10 text-gray-800">¿Por qué elegir AccessPoint?</h2>
        <div className="flex justify-around flex-wrap max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-5 basis-1/3 min-w-[250px] mb-5">
              <div className="text-4xl mb-4 text-blue-500">{feature.icon}</div>
              <h3 className="mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }