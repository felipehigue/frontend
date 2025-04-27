'use client';
import { useState, useCallback } from 'react'; // Importa useCallback
import { useRouter } from 'next/navigation';
import RegisterRoleSelector from '../Register/RegisterRolSelector';
import RegisterSocialAuth from '../Register/RegisterSocialAuth';
import RegisterAuthLink from './RegisterAuthLink';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    apellidos: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user', // Valor por defecto inicial
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRoleChange = useCallback((role) => { // Usa useCallback para memoizar la función
    setFormData({ ...formData, role: role });
  }, [setFormData]); // Dependencias de useCallback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('/api', { // Corregido: Ruta a la API
        method: 'POST', // Corregido: Método POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envía los datos del formulario como JSON
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error en la respuesta del servidor:', errorMessage);
        setError('Ocurrió un error al registrar el usuario');
        return;
      }

      const data = await response.json(); // Espera una respuesta JSON del servidor (simulado)
      console.log('Registro exitoso:', data);

      // Redireccionar a la página principal
      router.push('/');
    } catch (error) {
      console.error('Error al procesar el registro:', error);
      setError('Ocurrió un error al registrar el usuario');
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="mb-5">
              <label htmlFor="firstName" className="block mb-2 font-medium text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="name" // Asegúrate de que el 'name' coincida con la clave en formData
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5">
              <label htmlFor="lastName" className="block mb-2 font-medium text-gray-800">
                Apellidos
              </label>
              <input
                type="text"
                id="lastName"
                name="apellidos" // Asegúrate de que el 'name' coincida con la clave en formData
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Ingresa tus apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email" // Asegúrate de que el 'name' coincida con la clave en formData
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            placeholder="Ingresa tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-800">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password" // Asegúrate de que el 'name' coincida con la clave en formData
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Crea una contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-800">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword" // Asegúrate de que el 'name' coincida con la clave en formData
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Repite tu contraseña"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <RegisterRoleSelector onRoleChange={handleRoleChange}/>

        {/* Términos y condiciones integrado directamente */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            Acepto los <a href="#" className="text-blue-500 hover:underline">Términos y Condiciones</a> y la{' '}
            <a href="#" className="text-blue-500 hover:underline">Política de Privacidad</a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold uppercase transition-all hover:shadow-lg"
        >
          Crear cuenta
        </button>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">o regístrate con</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <RegisterSocialAuth />
        <RegisterAuthLink />
      </form>
    </div>
  );
}