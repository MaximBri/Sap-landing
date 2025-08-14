import React, { FC } from 'react'
import styles from '@/features/reviews/Reviews.module.scss'

interface Props {
  title: string
  description: string
  name: string
  role: string
  other: string
}

export const Review: FC<{ data: Props }> = ({ data }) => {
  const { description, name, other, role, title } = data
  
  return (
    <li className={styles['reviews__list-item']}>
      <h3 className={styles['reviews__list-item-title']}>{title}</h3>
      <p className={styles['reviews__list-item-description']}>{description}</p>
      <h4 className={styles['reviews__list-item-author']}>{name}</h4>
      <span className={styles['reviews__list-item-other']}>
        {role} | <strong>{other}</strong>
      </span>
    </li>
  )
}
