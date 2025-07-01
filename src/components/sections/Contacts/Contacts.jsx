import React from 'react'
import styles from './Contacts.module.css'

/**
 * Секция с контактной информацией
 * Карта проезда и основные контакты
 */
export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.content}>
        <h2 className={styles.title}>Связаться с нами</h2>
        
        <div className={styles.info}>
          <div className={styles.contactItem}>
            <h3>Телефон</h3>
            <a href="tel:+79959011095">+7 (995) 901-10-95</a>
          </div>
          
          <div className={styles.contactItem}>
            <h3>Адрес</h3>
            <p>г. Обнинск, Пяткинский проезд, дом 14</p>
          </div>
          
          <div className={styles.contactItem}>
            <h3>Email</h3>
            <a href="mailto:info@record-ai.ru">info@record-ai.ru</a>
          </div>
          
          <div className={styles.map}>
            <iframe 
              title="Офис на карте"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
              width="100%" 
              height="400"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}