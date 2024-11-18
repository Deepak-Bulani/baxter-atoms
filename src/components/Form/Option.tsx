import React from 'react';

const LABEL_POSITIONS = ['top', 'left'] as const;

type OptionItem = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

type SelectProps = {
  label?: string;
  labelPosition?: (typeof LABEL_POSITIONS)[number];
  items: OptionItem[];
  value?: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
  selectClassName?: string;
  labelClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
};

const Option = ({
  label,
  labelPosition = 'top',
  items = [],
  value,
  name,
  onChange,
  disabled = false,
  required = false,
  error,
  placeholder,
  className = '',
  selectClassName = '',
  labelClassName = '',
  size = 'md',
  id,
}: SelectProps) => {
  const sizeClasses = {
    sm: {
      select: 'h-6',
      text: 'text-xs',
    },
    md: {
      select: 'h-10',
      text: 'text-sm',
    },
    lg: {
      select: 'h-12',
      text: 'text-base',
    },
  };

  return (
    <div className={`${className} flex flex-col gap-2`}>
      {label && (
        <label
          htmlFor={id || name}
          className={`
            font-medium 
            text-gray-700 
            flex 
            justify-start
            ${sizeClasses[size].text}
            ${labelClassName}
          `}
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <div>
        <select
          id={id || name}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`
            w-full
            px-3
            border
            border-black
            bg-white
            ${sizeClasses[size].select}
            ${sizeClasses[size].text}
            ${error ? 'border-red-500' : ''}
            ${selectClassName}
          `}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {items.map((item, index) => (
            <option
              key={`${item.value}-${index}`}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
};

export default Option;
