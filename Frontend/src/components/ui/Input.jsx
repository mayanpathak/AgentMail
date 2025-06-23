
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Input = forwardRef(({ 
  className = '', 
  type = 'text', 
  error = false,
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
