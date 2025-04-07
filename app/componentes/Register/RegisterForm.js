import RegisterRoleSelector from '../Register/RegisterRolSelector';
import RegisterSocialAuth from '../Register/RegisterSocialAuth';
import RegisterAuthLink from './RegisterAuthLink';

export default function RegisterForm() {
  return (
    <div className="p-8">
      <form>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <div className="mb-5">
              <label htmlFor="firstName" className="block mb-2 font-medium text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Ingresa tu nombre"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Ingresa tus apellidos"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            placeholder="Ingresa tu correo electrónico"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Crea una contraseña"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Repite tu contraseña"
                required
              />
            </div>
          </div>
        </div>
        
        <RegisterRoleSelector />
        
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