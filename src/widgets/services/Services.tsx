import Image from 'next/image'
import styles from './Services.module.scss'
import bgPng from './icons/bg.png'
import { FC } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  subtitle?: string
  abilityList?: string[]
  isMain?: boolean
  sideList?: { title: string; link: string }[]
  price: string
  id: string
}

export const Services: FC<Props> = ({
  title,
  abilityList,
  subtitle,
  isMain = false,
  sideList,
  price,
  id,
}) => {
  return (
    <div className={styles.services__wrapper} id={id}>
      {isMain && (
        <Image
          className={styles.services__decore}
          src={bgPng}
          alt='decore'
          width={1920}
          height={1076}
        ></Image>
      )}
      <section
        id='services'
        className={`container ${
          isMain ? styles['services--main'] : styles.services
        }`}
      >
        <div className={styles.services__top}>
          <div
            className={
              isMain
                ? styles['services__top-left--main']
                : styles['services__top-left']
            }
          >
            {isMain && (
              <h3 className={styles['services__top-title']}>Наши Услуги</h3>
            )}
            <h2 className={styles['services__top-subtitle']}>{title}</h2>
            {subtitle && (
              <p className={styles['services__top-description']}>{subtitle}</p>
            )}
          </div>
          {isMain && (
            <nav className={styles['services__top-right']}>
              {sideList?.map((item) => {
                return (
                  <Link
                    href={item.link}
                    className={styles['services__top-phrase']}
                    key={item.link}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
        {abilityList?.length && (
          <div className={styles.services__main}>
            <h3 className={styles['services__main-title']}>
              Некоторые из возможностей нашей команды
            </h3>
            <ul className={styles.services__list}>
              {abilityList.map((item) => (
                <li className={styles['services__list-item']} key={item}>
                  <div></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <h3 className={styles.services__price}>От {price} руб.</h3>
      </section>
    </div>
  )
}
