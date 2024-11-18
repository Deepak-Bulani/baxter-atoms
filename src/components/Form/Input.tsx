import React from 'react';

const INPUT_TYPES = [
  'text',
  'password',
  'email',
  'number',
  'tel',
  'url',
] as const;
const LABEL_POSITIONS = ['top', 'left'] as const;

type InputProps = {
  label?: string;
  labelPosition?: (typeof LABEL_POSITIONS)[number];
  type?: (typeof INPUT_TYPES)[number];
  value?: string | number;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
};

const Input = ({
  label,
  labelPosition = 'top',
  type = 'text',
  value,
  name,
  placeholder,
  onChange,
  disabled = false,
  required = false,
  error,
  className = '',
  inputClassName = '',
  labelClassName = '',
  size = 'md',
  id,
}: InputProps) => {
  const sizeClasses = {
    sm: {
      input: 'h-6',
      text: 'text-xs',
    },
    md: {
      input: 'h-10',
      text: 'text-sm',
    },
    lg: {
      input: 'h-12',
      text: 'text-base',
    },
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className={`font-medium flex justify-start text-gray-700 ${sizeClasses[size].text} ${labelClassName}`}
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <input
        id={id || name}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          w-full 
          border border-black
          focus:border-transparent
          disabled:bg-gray-100
          disabled:cursor-not-allowed
          transition-colors
          ${sizeClasses[size].input}
          ${sizeClasses[size].text}
          ${error ? 'border-red-500' : ''}
          ${inputClassName}
        `}
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default Input;
