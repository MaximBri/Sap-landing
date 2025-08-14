import Link from 'next/link'
import styles from './Quote.module.scss'

export const Quote = () => {
  return (
    <div className={styles.quote__wrapper}>
      <section className={`container ${styles.quote}`}>
        <h2 className={styles.quote__title}>
          Доверие - это основа всех успешных отношений, и в бизнесе это не
          исключение
        </h2>
        <Link href={'#form'} className={`button ${styles.quote__button}`}>Написать</Link>
      </section>
    </div>
  )
}
