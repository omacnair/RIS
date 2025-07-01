import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, onClick, className }) {
  return (
    <button 
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}