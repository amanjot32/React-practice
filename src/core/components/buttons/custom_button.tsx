import React from 'react';
import TextComponent from '../text_styles';

interface CustomButtonProps {
  icon: React.ElementType;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon: Icon, text }) => {
  return (
    <button className="flex items-center bg-black dark:bg-white hover:bg-purple dark:hover:bg-purple text-white dark:text-black font-bold py-1 px-2 rounded hover:shadow-lg transition duration-300 ease-in-out">
      <Icon className="w-5 h-5 mr-2" />
      <TextComponent text={text} size='base' weight='bold' />
    </button>
  );
};

export default CustomButton;
