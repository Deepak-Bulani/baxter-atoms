import React from 'react';
const Input = ({
  label,
  labelPosition,
  type = 'text',
  value,
  name,
  placeholder,
  onChange,
  disabled = false,
  required = false,
}) => {
  const isLabelLeft = labelPosition === 'left';

  return (
    <div className={`mb-2 ${isLabelLeft ? 'flex items-center' : 'flex flex-col'}`}>
      {label && (
        <label
          className={`text-sm font-bold mb-${isLabelLeft ? '0' : '1'} mr-${isLabelLeft ? '2' : '0'}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="h-22px w-[180px] border border-gray-300"
      />
    </div>
  );
};

export default Input;
