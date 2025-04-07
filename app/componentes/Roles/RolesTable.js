import Button from './Button';

const RolesTable = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mb-10 shadow-md rounded-lg">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Nombre del Rol</th>
            <th className="px-4 py-3 text-left">Descripción</th>
            <th className="px-4 py-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">{role.id}</td>
              <td className="px-4 py-3 font-medium">{role.name}</td>
              <td className="px-4 py-3 text-gray-600">{role.description}</td>
              <td className="px-4 py-3 space-x-2">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => onEdit(role)}
                >
                  Editar
                </Button>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => onDelete(role.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;