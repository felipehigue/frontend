
'use client';
import React from 'react';

function FormGroup({ label, type, id, name, placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange} // Asegúrate de que esta prop se esté pasando
        required={required}
      />
    </div>
  );
}

export default FormGroup;