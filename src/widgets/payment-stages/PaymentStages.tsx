import { Graphic } from '../graphic'
import styles from './PaymentStages.module.scss'

export const PaymentStages = () => {
  return (
    <div className={styles.payment__wrapper}>
      <section className={`container ${styles.payment}`}>
        <h2 className={styles.payment__title}>Наши преимущества</h2>
        <ul className={styles.payment__list}>
          <li className={styles['payment__list-item']}>
            <h3 className={styles['payment__list-item-title']}>
              Мы не просто следим за трендами — мы их создаём.
            </h3>
            <p className={styles['payment__list-item-description']}>
              Используем передовые маркетинговые инструменты, аналитику,
              нейросети и автоматизацию, чтобы максимально эффективно достигать
              ваших бизнес-целей. Наши стратегии всегда актуальны, гибкие и
              ориентированы на результат.
            </p>
          </li>
          <li className={styles['payment__list-item']}>
            <h3 className={styles['payment__list-item-title']}>
              За каждым нашим проектом — опытные специалисты:
            </h3>
            <p className={styles['payment__list-item-description']}>
              стратеги, креаторы, таргетологи, аналитики и дизайнеры. Мы
              объединяем сильные компетенции и глубокое понимание рынка, чтобы
              вы получали не просто услуги, а полноценное партнёрство и рост.
            </p>
          </li>
          <li className={styles['payment__list-item']}>
            <h3
              className={`${styles['payment__list-item-title']} ${styles['payment__list-item-title--gradient']}`}
            >
              Мы строим отношения на доверии.
            </h3>
            <p className={styles['payment__list-item-description']}>
              Все процессы, бюджеты и результаты — открыты и понятны. Вы всегда
              в курсе, за что платите и какой эффект это даёт. Без
              завуалированных отчётов и «воды» — только реальные цифры и честные
              ответы.
            </p>
          </li>
        </ul>
        <h3 className={styles['payment__decore-title']}>Как мы работаем</h3>
        {/* <h4 className={styles['payment__decore-subtitle']}>
          Ac praesent lorem iaculis
        </h4> */}
        <Graphic />
        <ul className={styles['payment__texts']}>
          <li className={styles['payment__texts-item']}>
            Ускорьте процесс привлечения клиентов с помощью понятных и
            высокоэффективных целевых страниц.
          </li>
          <li className={styles['payment__texts-item']}>
            Цель — максимальная эффективность при оптимальных вложениях.
          </li>
          <li className={styles['payment__texts-item']}>
            Получите максимальную отдачу от своего бюджета с помощью эффективной
            стратегии проведения торгов.
          </li>
        </ul>
      </section>
    </div>
  )
}
