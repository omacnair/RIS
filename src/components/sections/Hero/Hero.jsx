import React from 'react';
import styles from './Hero.module.css';
import logo from '../../../assets/images/logo.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div> {/* Добавленный оверлей */}
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <img 
            src={logo} 
            alt="RECORD AI Systems" 
            className={styles.logo}
          />
          <a href="#consultation-form" className={styles.ctaButton}>
            Получить консультацию
          </a>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.textContent}>
            <p>Мы - инновационное решение для бизнеса 
              на базе искусственного интеллекта. Мы создаем умные системы, которые автоматизируют 
              ключевые процессы, повышают эффективность и сокращают операционные расходы.
            </p>
            <p>
              Наше ПО на основе ИИ анализирует большие данные, прогнозирует тенденции 
              и принимает оптимальные решения, позволяя вашему бизнесу работать 
              на опережение конкурентов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;