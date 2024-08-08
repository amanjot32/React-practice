import React from 'react';

interface IconButtonProps {
  icon: React.ElementType;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <button className="hover:text-purple" onClick={onClick}>
      <Icon style={{ width: '20px', height: '20px' }} />
    </button>
  );
}

export default IconButton;
