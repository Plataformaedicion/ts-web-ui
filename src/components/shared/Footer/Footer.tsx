import React from 'react';
import styles from './Footer.module.css'
export const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <footer className={styles.Footer__name}>
      <p>Trim Selector © {year}</p>
    </footer>
  );
}