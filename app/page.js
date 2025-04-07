import LoginHeader from "../app/componentes/Login/LoginHeader"
import LoginForm from '../app/componentes/Login/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginHeader 
          title="Iniciar Sesión" 
          subtitle="Bienvenido de nuevo a AccessPoint" 
        />
        <LoginForm />
      </div>
    </div>
  );
}