const FormInput = ({ 
    label, 
    id, 
    type = 'text', 
    containerClass = '',
    ...props 
  }) => {
    return (
      <div className={`mb-5 ${containerClass}`}>
        {label && (
          <label htmlFor={id} className="block mb-1 text-gray-800 font-medium">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          {...props}
        />
      </div>
    );
  };
  
  export default FormInput;