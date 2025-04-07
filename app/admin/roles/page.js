'use client'
import { useState } from 'react';
import Navbar from '../../componentes/Home/Navbar';
import Footer from '../../componentes/Home/Footer';
import RolesTable from '../../componentes/Roles/RolesTable';
import RoleForm from '../../componentes/Roles/RolForm';
import Button from '../../componentes/Roles/Button';

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Administrador', description: 'Acceso completo al sistema' },
    { id: 2, name: 'Usuario', description: 'Acceso limitado' },
    { id: 3, name: 'Invitado', description: 'Acceso de solo lectura' }
  ]);

  const [editingRole, setEditingRole] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddRole = () => {
    setEditingRole(null);
    setShowForm(true);
  };

  const handleEdit = (role) => {
    setEditingRole(role);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar este rol?')) {
      setRoles(roles.filter(role => role.id !== id));
    }
  };

  const handleSubmit = (formData) => {
    if (editingRole) {
      // Actualizar rol existente
      setRoles(roles.map(role => 
        role.id === editingRole.id ? { ...role, ...formData } : role
      ));
    } else {
      // Agregar nuevo rol
      const newId = Math.max(...roles.map(r => r.id), 0) + 1;
      setRoles([...roles, { id: newId, ...formData }]);
    }
    setShowForm(false);
    setEditingRole(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-1 mt-16 p-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center my-8 text-gray-800">Administrar Roles</h2>
          
          <div className="flex justify-end mb-4">
            <Button 
              variant="primary"
              onClick={handleAddRole}
              disabled={showForm}
            >
              Agregar Rol
            </Button>
          </div>

          {showForm ? (
            <RoleForm
              title={editingRole ? 'Editar Rol' : 'Agregar Rol'}
              initialData={editingRole || { name: '', description: '' }}
              onSubmit={handleSubmit}
              onCancel={() => setShowForm(false)}
            />
          ) : (
            <RolesTable 
              roles={roles} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RolesPage;