import React, { useState } from 'react'
import styles from './Consultation.module.css'

/**
 * Секция с формой для заказа консультации
 * Валидация полей и обработка отправки
 */
export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', formData)
    alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <div className={styles.consultation}>
      <h2 className={styles.title}>Получить консультацию</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Ваш вопрос</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </form>
    </div>
  )
}


