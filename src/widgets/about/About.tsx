import styles from './About.module.scss'

export const About = () => {
  return (
    <div className={styles.about__decore}>
      <section className={`container ${styles.about}`} id='about'>
        <div className={styles.about__top}>
          <div className={styles['about__top-left']}>
            <h3 className={styles['about__top-subtitle']}>
              Почему Компании выбирают SAP
            </h3>
            <h2 className={styles['about__top-title']}>
              Делаем бизнес заметным!
            </h2>
          </div>
          <div className={styles['about__top-right']}>
            <p className={styles['about__top-description']}>
              SAP - это digital-маркетинг и веб-разработка. Агентство, которое
              работает с компаниями SaaS, работающих в облаке.
            </p>
            <div className={styles['about__top-keywords-box']}>
              <div className={styles['about__top-keywords']}>
                <div></div>Marketing
              </div>
              <div className={styles['about__top-keywords']}>
                <div></div>Design
              </div>
              <div className={styles['about__top-keywords']}>
                <div></div>Development
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.about__list}>
          <li className={styles['about__list-item']}>
            <h3 className={styles['about__list-item-title']}>Lorem ipsum dolor sit amet. Lorem ipsum.</h3>
            <p className={styles['about__list-item-subtitle']}>
              We operate as an extension of your team, proactive and easily
              approachable.
            </p>
          </li>
          <li className={styles['about__list-item']}>
            <h3 className={styles['about__list-item-title']}>Lorem ipsum dolor sit amet. Lorem ipsum.</h3>
            <p className={styles['about__list-item-subtitle']}>
              We operate as an extension of your team, proactive and easily
              approachable.
            </p>
          </li>
          <li className={styles['about__list-item']}>
            <h3 className={styles['about__list-item-title']}>Lorem ipsum dolor sit amet. Lorem ipsum.</h3>
            <p className={styles['about__list-item-subtitle']}>
              We operate as an extension of your team, proactive and easily
              approachable.
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}
