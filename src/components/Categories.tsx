// src/components/Categories.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearchOpen, setSelectedCategory } from '../slice.tsx';
import { NavItemPropsInterface } from '../global_components/GlobalInterface.tsx';

const Categories: React.FC<NavItemPropsInterface> = ({ label, onClick }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (label === 'SEARCH') {
      dispatch(toggleSearchOpen()); 
    } else if (onClick) {
      dispatch(setSelectedCategory(label))
      onClick(); 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors"
    >
      <div className="w-8 h-8 mb-1 rounded-full bg-gray-200"></div>
      <span className="text-xs">{label}</span>
    </button>
  );
};

export default Categories;
