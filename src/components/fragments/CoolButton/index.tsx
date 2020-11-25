import React from 'react';
import './styles.css';

interface ButtonParams {
  children: any,
  onClick: () => void,
  theme: number,
}

export default function CoolButton({children, onClick, theme}: ButtonParams) {
  return (
    <button
      className={theme === 0 ? 'theme0' : ''}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
