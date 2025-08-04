import Image from 'next/image'
import styles from './Services.module.scss'
import bgPng from './icons/bg.png'

const servicesList = [
  'WEB-приложения',
  'CRM',
  'Интернет-магазины',
  'Мобильные приложения',
  'Корпоративные сайты',
  'UХ-аудит',
]

export const Services = () => {
  return (
    <div className={styles.services__wrapper}>
      <Image
        className={styles.services__decore}
        src={bgPng}
        alt='decore'
        width={1920}
        height={1076}
      ></Image>
      <section id='services' className={`container ${styles.services}`}>
        <div className={styles.services__top}>
          <div className={styles['services__top-left']}>
            <h3 className={styles['services__top-title']}>Наши Услуги</h3>
            <h2 className={styles['services__top-subtitle']}>UX/UI дизайн</h2>
            <p className={styles['services__top-description']}>
              Проектирование удобных, понятных и эстетичных пользовательских
              интерфейсов
            </p>
          </div>
          <ul className={styles['services__top-right']}>
            <li className={styles['services__top-phrase']}>UX/UI - дизайн</li>
            <li className={styles['services__top-phrase']}>
              Web Dev & Maintenance
            </li>
            <li className={styles['services__top-phrase']}>
              Conversion Rate Optimization
            </li>
            <li className={styles['services__top-phrase']}>
              Paid Search Advertising
            </li>
          </ul>
        </div>
        <div className={styles.services__main}>
          <h3 className={styles['services__main-title']}>
            Некоторые из возможностей нашей команды
          </h3>
          <ul className={styles.services__list}>
            {servicesList.map((item) => (
              <li className={styles['services__list-item']} key={item}>
                <div></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h3 className={styles.services__price}>От 50 000 руб.</h3>
      </section>
    </div>
  )
}
