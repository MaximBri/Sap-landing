'use client'

import { useState } from 'react'
import { WorkLarge } from '@/features/work-large'
import { worksList } from './model/constants'
import { WorkSmall } from '../work-small'
import styles from './Works.module.scss'

export const Works = () => {
  const [activeItem, setActiveItem] = useState<number>(0)

  return (
    <section className={`container ${styles.works}`} id='projects'>
      <div className={styles.works__top}>
        <div className={styles.works__texts}>
          <h2 className={styles['works__texts-title']}>Портфолио</h2>
          <h3 className={styles['works__texts-subtitle']}>
            У нас лучшая команда для достижения выдающихся результатов!
          </h3>
        </div>
        <nav className={styles.works__nav}>
          {worksList.map((item, index) => (
            <button
              onClick={() => setActiveItem(index)}
              className={`${
                activeItem === index ? styles['works__nav-item--active'] : ''
              } ${styles['works__nav-item']}`}
              key={index}
            >
              <div></div> {item.title}
            </button>
          ))}
        </nav>
      </div>
      <ul className={styles.works__list}>
        {worksList[activeItem].works.map((item, index) => {
          return item.type === 'large' ? (
            <WorkLarge
              category={worksList[activeItem].techname}
              data={item}
              key={index}
            />
          ) : (
            <WorkSmall data={item} key={index} />
          )
        })}
      </ul>
    </section>
  )
}
