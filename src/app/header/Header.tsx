'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'

export const Header = () => {
  return (
    <>
      <header className={`container ${styles.header}`}>
        <div className={styles.header__wrapper}>
          <Link href={'/'} className={styles.header__logo}>
            SAP agency
          </Link>
          <span className={styles['header__wrapper-separator']}>|</span>
          <nav className={styles.header__nav}>
            <Link href='#about' className={styles['header__nav-link']}>
              Об агентстве
            </Link>
            <Link href='#services' className={styles['header__nav-link']}>
              Услуги
            </Link>
            <Link href='#projects' className={styles['header__nav-link']}>
              Проекты
            </Link>
            <Link href='#contacts' className={styles['header__nav-link']}>
              Контакты
            </Link>
          </nav>
        </div>
        <Link href={'#form'} className={`button ${styles.header__button}`}>
          Написать
        </Link>
      </header>
      <Image
        width={1920}
        height={1076}
        className={styles.header__decor}
        src='/images/bg-header.png'
        alt='decor'
      />
    </>
  )
}
