'use client'

import { Review } from '@/widgets/review'
import { reviews } from './model/reviews'
import styles from './Reviews.module.scss'
import { useState } from 'react'
import ArrowRight from './icons/arrow-right.svg'
import Image from 'next/image'

export const Reviews = () => {
  const [activeElement, setActiveElement] = useState<number>(0)

  const CARD_WIDTH = 447
  const GAP = 30
  const VISIBLE_CARDS = 2
  const SLIDE_STEP = 1

  const maxIndex = reviews.length - VISIBLE_CARDS

  const handlePrev = () => {
    setActiveElement((prev) => Math.max(prev - SLIDE_STEP, 0))
  }

  const handleNext = () => {
    setActiveElement((prev) => Math.min(prev + SLIDE_STEP, maxIndex))
  }

  return (
    <div className={styles.reviews__background}>
      <section className={`container ${styles.reviews}`}>
        <div className={styles.reviews__texts}>
          <h2 className={styles['reviews__texts-title']}>Отзывы</h2>
          <p className={styles['reviews__texts-description']}>
            Компании, с которыми мы работаем, отмечают наш профессионализм и
            подход.
          </p>
        </div>

        <div className={styles['reviews__list-wrapper']}>
          <ul
            className={styles.reviews__list}
            style={{
              transform: `translateX(-${activeElement * (CARD_WIDTH + GAP)}px)`,
              transition: 'transform 0.4s ease-in-out',
            }}
          >
            {reviews.map((review) => (
              <Review data={review} key={review.name} />
            ))}
          </ul>

          <nav className={styles['reviews__list-nav']}>
            <button onClick={handlePrev} disabled={activeElement === 0}>
              <Image
                src={ArrowRight}
                style={{ transform: 'rotate(180deg)' }}
                alt='prev'
                width={30}
                height={30}
              ></Image>
            </button>
            <button onClick={handleNext} disabled={activeElement >= maxIndex}>
              <Image src={ArrowRight} alt='next' width={30} height={30}></Image>
            </button>
          </nav>
        </div>
      </section>
    </div>
  )
}
