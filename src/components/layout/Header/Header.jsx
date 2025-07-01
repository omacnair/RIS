import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo01.png';

const Header = ({ scrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Закрываем меню при увеличении экрана
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <img src={logo} alt="RECORD AI" className={styles.logoImg} />
      
      {/* Десктопное меню */}
      <nav className={styles.nav}>
        <button onClick={() => scrollTo.aboutRef()}>О компании</button>
        <button onClick={() => scrollTo.productsRef()}>Продукты</button>
        <button onClick={() => scrollTo.consultationRef()}>Контакты</button>
      </nav>
      
      {/* Мобильное меню */}
      {isMobile && (
        <>
          <div 
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
            <button onClick={() => { 
              scrollTo.aboutRef();
              setMenuOpen(false);
            }}>О компании</button>
            <button onClick={() => { 
              scrollTo.productsRef();
              setMenuOpen(false);
            }}>Продукты</button>
            <button onClick={() => { 
              scrollTo.consultationRef();
              setMenuOpen(false);
            }}>Контакты</button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;