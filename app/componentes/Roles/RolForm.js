import { useState } from 'react';
import FormInput from '../../componentes/Roles/Input';
import Button from './Button';

const RoleForm = ({ 
  title = 'Agregar Rol',
  initialData = { name: '', description: '' },
  onSubmit,
  onCancel 
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mb-10">
      <h3 className="text-xl font-semibold mb-5 text-gray-800">{title}</h3>
      <form onSubmit={handleSubmit}>
        <FormInput 
          id="roleName"
          label="Nombre del Rol"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput 
          id="roleDescription"
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <div className="flex justify-end space-x-3">
          {onCancel && (
            <Button 
              type="button" 
              variant="secondary"
              onClick={onCancel}
            >
              Cancelar
            </Button>
          )}
          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RoleForm;
