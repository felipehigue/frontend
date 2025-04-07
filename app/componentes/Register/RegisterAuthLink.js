
'use client'; 

import Link from 'next/link';

const RegisterAuthLink = () => {
  return (
    <div className="text-center mt-5 text-gray-600 text-sm">
      ¿Ya tienes una cuenta?{' '}
      <Link href="/" className="text-blue-500 font-medium hover:underline">
        Inicia sesión
      </Link>
    </div>
  );
};

export default RegisterAuthLink; 