import React from 'react';
import styles from './Products.module.css';

const Products = () => {
  const products = [
    {
      title: "Решения с применением ИИ технологий",
      description: "Автоматизация бизнес-процессов с использованием нейросетей и машинного обучения"
    },
    {
      title: "Создание ПО под ваши нужды", 
      description: "Индивидуальная разработка программного обеспечения с учетом специфики вашего бизнеса"
    },
    {
      title: "Умное видеонаблюдение",
      description: "Системы анализа видеопотоков с распознаванием объектов и событий в реальном времени"
    }
  ];

  const technologies = [
    {
      title: "AI и нейросети",
      description: "Глубокое обучение для сложных аналитических задач и прогнозирования"
    },
    {
      title: "Edge вычисления",
      description: "Обработка данных непосредственно на устройстве без задержек"
    },
    {
      title: "Безопасность данных",
      description: "End-to-end шифрование и защищенные протоколы передачи информации"
    }
  ];

  return (
    <section className={styles.products}>
      {/* Секция продуктов */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши продукты</h2>
          <p className={styles.subtitle}>
            Инновационные решения, которые трансформируют ваш бизнес и выводят 
            автоматизацию на новый уровень
          </p>
        </div>
        
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Секция технологий */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>Технологии</h2>
          <p className={styles.subtitle}>
            Мощные инструменты искусственного интеллекта для решения самых сложных задач
          </p>
        </div>
        
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.card}>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;