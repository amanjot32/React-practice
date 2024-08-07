import React from 'react';
import TextComponent from '../text_styles'

interface CustomButtonProps {
  icon: React.ElementType;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon: Icon, text }) => {
  return (
    <button className="flex items-center bg-white hover:bg-purple hover:text-white text-black font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out">
      <Icon className="w-6 h-6 mr-2" />
      <TextComponent text={text} size='base' weight='bold'/>
    </button>
  );
};

export default CustomButton;
