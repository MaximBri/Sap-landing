'use client'

import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'
import TelegramSvg from './icons/telegram.svg'
import { Email, GroupLink, Phone, PhoneForLink } from '@/shared/config/private'

export const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.footer__top}>
        <Link href={'/'} className={styles.footer__logo}>
          <Image src='/logo.jpg' alt='Logo' width={50} height={50} />
          <span className={styles['footer__logo-name']}>SAP agency</span>
        </Link>
        <div className={styles['footer__top-list']}>
          <h3 className={styles['footer__top-title']}>Контакты:</h3>
          <a
            href={`tel:${PhoneForLink}`}
            className={styles['footer__top-item']}
          >
            {Phone}
          </a>
          <a href={`mailto:${Email}`} className={styles['footer__top-item']}>
            {Email}
          </a>
        </div>
        <div>
          <h3 className={styles['footer__top-title']}>Мы также есть:</h3>
          <div>
            <Link href={GroupLink} target='_blank'>
              <Image
                src={TelegramSvg}
                alt='telegram'
                width={55}
                height={55}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <h4 className={styles['footer__bottom-text']}>
          © 2025. Компания. Все права защищены
        </h4>
        <Link className={styles['footer__bottom-text']} href={'#'}>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  )
}
