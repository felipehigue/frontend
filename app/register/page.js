'use client';
import { useRouter } from 'next/navigation';
import RegisterHeader from '../componentes/Register/Header';
import RegisterForm from '../componentes/Register/RegisterForm';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    // Redirigir a la página principal después del registro
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <RegisterHeader />
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      </div>
    </div>
  );
}