'use client';

import { useState } from 'react';

export default function RegisterRoleSelector() {
  const [selectedRole, setSelectedRole] = useState('Cliente');
  
  const roles = [
    { icon: '🏠', name: 'Cliente', description: 'Compra y gestiona productos inteligentes para tu hogar' },
    { icon: '🛠️', name: 'Instalador', description: 'Ofrece servicios de instalación y mantenimiento' },
    { icon: '🏢', name: 'Empresa', description: 'Soluciones para negocios y proyectos a gran escala' }
  ];

  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-800">Selecciona tu rol</label>
      <div className="flex flex-wrap gap-4 mt-2">
        {roles.map((role) => (
          <div
            key={role.name}
            onClick={() => setSelectedRole(role.name)}
            className={`flex-1 min-w-[200px] border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
              selectedRole === role.name
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            <div className="text-3xl mb-2">{role.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{role.name}</h3>
            <p className="text-sm text-gray-600">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}