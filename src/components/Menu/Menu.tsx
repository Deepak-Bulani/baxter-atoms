// Menu.tsx
import React from 'react';

type MenuItemProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  isHeader?: boolean;
};

type MenuProps = {
  items: MenuItemProps[];
  className?: string;
};

const Menu = ({ items, className = '' }: MenuProps) => {
  return (
    <div className={`bg-gray-200 text-xs ${className}`}>
      <div className='flex flex-col gap-1'>
        {items.map((item, index) =>
          item.isHeader ? (
            <div
              key={index}
              className='pl-4 py-2 text-left font-medium text-gray-700'
            >
              {item.label}
            </div>
          ) : (
            <button
              key={index}
              onClick={item.onClick}
              className={`
               w-full text-left px-4 py-2 transition-colors
               ${
                 item.isActive ? 'bg-[#6e8bb4] text-white' : 'hover:bg-gray-300'
               }
             `}
            >
              {item.label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
