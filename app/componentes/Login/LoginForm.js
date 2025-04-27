'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormGroup from './FormGroup'; // Asegúrate de que la ruta a FormGroup sea correcta

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Datos de inicio de sesión:', formData)
      const response = await fetch('/api', { // La ruta de inicio de sesión es ahora '/api'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        console.error('Error al iniciar sesión:', errorMessage);
        setError(errorMessage.error || 'Ocurrió un error al iniciar sesión');
        return;
      }

      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);

      // Almacenar la información del usuario y el rol
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirigir según el rol
      if (data.user.role === 'admin') {
        router.push('/admin/roles'); // Redirige a la página de administrador
      } else {
        router.push('/home'); // Redirige a la página de inicio normal
      }
    } catch (error) {
      console.error('Error al procesar el inicio de sesión:', error);
      setError('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormGroup
          label="Correo electrónico"
          type="email"
          id="email"
          name="email" // Asegúrate de que el 'name' coincida con formData
          placeholder="Ingresa tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormGroup
          label="Contraseña"
          type="password"
          id="password"
          name="password" // Asegúrate de que el 'name' coincida con formData
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Recordar sesión
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              ¿No tienes una cuenta?
            </span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="/register"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
}