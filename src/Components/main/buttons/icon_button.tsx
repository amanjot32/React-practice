import React from 'react';

interface IconButtonProps{
    icon: React.ElementType;
  }
  
  const IconButton: React.FC<IconButtonProps> = ({icon: Icon}) => {
    return (
      <button className="hover:text-purple">
        <Icon style={{ width: '20px', height: '20px'}}/>
      </button>
    )
  }
  
  export default IconButton;