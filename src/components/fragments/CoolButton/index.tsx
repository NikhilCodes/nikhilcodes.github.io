import React from 'react';
import './styles.css';

interface ButtonParams {
  children: any,
  onClick: () => void,
  theme: number,
  style?: object,
}

export default function CoolButton({ children, onClick, theme, style }: ButtonParams) {
  return (
    <button
      className={theme === 0 ? 'theme0' : theme === 1 ? 'theme1' : ''}
      style={style ? style : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
