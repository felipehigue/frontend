const Button = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    size = 'md',
    ...props 
  }) => {
    const baseClasses = 'rounded-md transition-all text-white font-medium';
    const variantClasses = {
      primary: 'bg-blue-500 hover:bg-blue-600',
      danger: 'bg-red-500 hover:bg-red-600',
      secondary: 'bg-gray-500 hover:bg-gray-600'
    };
    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    };
    
    return (
      <button 
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;