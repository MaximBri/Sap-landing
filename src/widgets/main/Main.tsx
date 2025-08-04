import Link from 'next/link'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <section className={`container ${styles.main}`}>
      <h1 className={styles.main__title}>Улучшение вашего бизнеса</h1>
      <h2 className={styles.main__subtitle}>
        Точечный подход к маркетингу не для каждого бизнеса
      </h2>
      <nav className={styles.main__nav}>
        <button className={`button ${styles['main__nav-button-start']}`}>
          Начать
        </button>
        <Link href={'#projects'} className={styles['main__nav-button-works']}>Кейсы</Link>
      </nav>
      <div className={styles.main__decore}></div>
    </section>
  )
}
