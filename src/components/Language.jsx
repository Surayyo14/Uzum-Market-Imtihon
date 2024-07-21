
import React, { useState } from 'react';
import Uzflag from '../assets/helper/uz.svg';
import Ruflag from '../assets/helper/ru.svg';
import i18next from 'i18next';

const options = [
  { value: 'uz', label: "O'zbekcha", icon: Uzflag },
  { value: 'ru', label: 'Русский', icon: Ruflag },
];

export default function Language() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelect = (option) => {
    i18next.changeLanguage(option.value)
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  const filteredOptions = options.filter(option => option.value !== selectedOption.value);

  return (
    <div className="relative inline-block w-[110px]">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center bg-transparent text-gray-800 px-2">
        <img src={selectedOption.icon} alt={selectedOption.label} className="w-5 h-5" />
        <span className="ml-[5px] text-[14px] leading-[14px] font-medium">{selectedOption.label}</span>
      </button>

      {isOpen && (
        <ul className="absolute mt-3 w-full bg-transparent rounded-md">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            >
              <img src={option.icon} alt={option.label} className="w-5 h-5" />
              <span className="ml-[5px] text-[14px] leading-[14px] font-medium">{option.label}</span>
            </li> 
          ))}
        </ul>
      )}
    </div>
  );
}