import styles from './KeyWords.module.scss'

export const KeyWords = () => {
  return (
    <section className={`container ${styles.keywords}`}>
      <div className={`container ${styles.keywords__wrapper}`}>
        <h3 className={styles.keywords__word}>
          SAP - <strong>digital-студия с большим спектром услуг</strong>
        </h3>
        <div className={styles.keywords__list}>
          <div className={styles.keywords__dot}></div>
          <h3 className={styles.keywords__word}>Маркетинг</h3>
          <div className={styles.keywords__dot}></div>
          <h3 className={styles.keywords__word}>Разработка</h3>
        </div>
      </div>
    </section>
  )
}
