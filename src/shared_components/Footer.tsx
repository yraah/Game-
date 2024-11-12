import React, { useState } from 'react';
import { menuItemsData } from '../global_components/GlobalData.tsx';


const Footer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIconClick = (index: number, onClick: () => void) => {
    setActiveIndex(index);
    onClick();
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex justify-around items-center py-3">
        {menuItemsData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleIconClick(index, item.onClick)}
            className={`flex flex-col items-center focus:outline-none transition-colors duration-300 ${
              activeIndex === index
                ? 'text-blue-500 shadow-lg shadow-blue-500/50'
                : 'text-gray-500'
            }`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
