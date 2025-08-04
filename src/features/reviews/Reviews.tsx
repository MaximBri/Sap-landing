import styles from './Reviews.module.scss'

export const Reviews = () => {
  return (
    <div className={styles.reviews__background}>
      <section className={`container ${styles.reviews}`}>
        <div className={styles.reviews__texts}>
          <h2 className={styles['reviews__texts-title']}>Lorem</h2>
          <p className={styles['reviews__texts-description']}>
            Компании, с которыми мы работаем, отмечают наш профессионализм и
            подход.
          </p>
        </div>
        <ul className={styles.reviews__list}>
          <li className={styles['reviews__list-item']}>
            <h3 className={styles['reviews__list-item-title']}>
              Lorem ipsum dolor sit amet
            </h3>
            <p className={styles['reviews__list-item-description']}>
              Lorem ipsum dolor sit amet consectetur. Elementum proin sit
              ultrices ultrices volutpat lacinia. Non in lectus consequat
              consequat faucibus. Quis phasellus fermentum in ipsum.
            </p>
            <h4 className={styles['reviews__list-item-author']}>
              Julie O’Brien
            </h4>
            <span className={styles['reviews__list-item-other']}>
              CMO | <strong>Dazz</strong>
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
