import { FC } from 'react'
import Image from 'next/image'
import LinkArrowSvg from '@/shared/icons/link-arrow.svg'
import LinkSvg from './icons/link.svg'
import styles from './WorkLarge.module.scss'
import { WorkModel } from '../works/model/constants'
import Link from 'next/link'

export const WorkLarge: FC<{ data: WorkModel; category: string }> = ({
  data,
  category,
}) => {
  return (
    <li className={styles.work}>
      <div className={styles.work__left}>
        <div className={styles.work__info}>
          <ul className={styles.work__tags}>
            {data.tags.map((item) => (
              <li className={styles['work__tags-item']} key={item}>
                {item}
              </li>
            ))}
          </ul>
          {data.stack?.length && (
            <ul className={styles.work__stack}>
              {data.stack.map((item) => {
                return (
                  <Image
                    src={`/works/stack/${item}`}
                    width={33}
                    height={28}
                    key={item}
                    alt={item}
                  />
                )
              })}
            </ul>
          )}
        </div>
        <div className={styles.work__texts}>
          {data.site && (
            <div className={styles.work__site}>
              <Image src={LinkSvg} alt='site' width={35} height={30}></Image>
              {data.site}
            </div>
          )}
          <h3 className={styles.work__title}>{data.title}</h3>
          {data.collaborator && (
            <h4 className={styles.work__collaborator}>
              совместно с{' '}
              <Link href={data.collaborator.link} target='_blank'>
                {data.collaborator.name}
              </Link>
            </h4>
          )}
        </div>
      </div>
      <div className={styles.work__right}>
        <Link
          href={data.link}
          target='_blank'
          className={styles['work__right-icon']}
        >
          <Image src={LinkArrowSvg} alt='arrow' width={22} height={22}></Image>
        </Link>
        {data.folder && (
          <Image
            className={styles['work__right-image']}
            src={`/works/${category}/${data.folder}/${data.image}`}
            width={650}
            height={325}
            alt='work'
          ></Image>
        )}
      </div>
    </li>
  )
}
