import Image from 'next/image'
import styles from './PaymentStages.module.scss'
import StartSvg from './icons/start.png'

export const PaymentStages = () => {
  return (
    <div className={styles.payment__wrapper}>
      <section className={`container ${styles.payment}`}>
        <h2 className={styles.payment__title}>Lorem ipsum dolor sit amet</h2>
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
        <h3 className={styles['payment__decore-title']}>
          Lorem ipsum dolor sit
        </h3>
        <h4 className={styles['payment__decore-subtitle']}>
          Ac praesent lorem iaculis
        </h4>
        {/* <div>
          <Image src={StartSvg} alt='decore' width={190} height={176}></Image>
        </div> */}
        <ul className={styles['payment__texts']}>
          <li className={styles['payment__texts-item']}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque.
          </li>
          <li className={styles['payment__texts-item']}>
            Accelerate the lead generation process through clear and
            high-performing landing pages.
          </li>
          <li className={styles['payment__texts-item']}>
            Get the most out of your budget with an effective bidding strategy.
          </li>
        </ul>
      </section>
    </div>
  )
}
