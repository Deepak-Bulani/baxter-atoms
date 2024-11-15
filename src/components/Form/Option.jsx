import React from 'react';

const Option = ({
  label,
  labelPosition,
  items = [],
  value,
  name,
  onChange,
  disabled = false,
  required = false,
}) => {
  const isLabelLeft = labelPosition === 'left';

  return (
    <div className={`mb-1 ${isLabelLeft ? 'flex items-center' : 'flex flex-col'}`}>
      {label && (
        <label
          className={`text-sm font-bold mb-${isLabelLeft ? '0' : '1'} mr-${isLabelLeft ? '2' : '0'}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="w-[240px] h-[28px] border border-gray-300 text-[12px] font-sans px-1"
      >
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Option;
