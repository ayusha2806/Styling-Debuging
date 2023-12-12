import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type}
     className="button" 
     onClick={props.onClick} 
     style={{ filter: !props.isValid ?  'blur(2px)' : 'none' }}>
      {props.children}
    </button>
  );
};

export default Button;