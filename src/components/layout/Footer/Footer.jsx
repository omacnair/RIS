import React from 'react'
import styles from './Footer.module.css'

/**
 * Подвал сайта с контактной информацией
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>РЕКОРД Интеллектуальные Системы</h3>
          <p>ИНН 7701234567</p>
          <p>ОГРН 1187746123456</p>
        </div>
        
        <div className={styles.contacts}>
          <h2>Контакты</h2>  
          <p>+7 (995) 901-10-95</p>
          <p>г. Обнинск, Пяткинский проезд, дом 14</p>
        </div>
      </div>
    </footer>
  )
}