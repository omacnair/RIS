import React from 'react';
import styles from './InfoBlock.module.css';

export default function InfoBlock({ title, content, position }) {
  return (
    <div className={`${styles.infoBlock} ${styles[position]}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}