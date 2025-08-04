import { FC } from 'react'
import { WorkModel } from '../works/model/constants'
import Image from 'next/image'
import LinkArrowSvg from '@/shared/icons/link-arrow.svg'
import styles from './WorkSmall.module.scss'

export const WorkSmall: FC<{ data: WorkModel }> = ({ data }) => {
  return (
    <li className={styles.work}>
      <div>
        <ul className={styles.work__tags}>
          {data.tags.map((item) => {
            return (
              <li className={styles['work__tags-item']} key={item}>
                {item}
              </li>
            )
          })}
        </ul>
        {data.stack?.length && (
          <ul className={styles.work__stack}>
            {data.stack?.map((item) => {
              return (
                <Image
                  src={`/works/stack/${item}`}
                  alt='stack'
                  width={33}
                  height={28}
                  key={item}
                />
              )
            })}
          </ul>
        )}
      </div>
      <div className={styles.work__bottom}>
        <div>
          <h3 className={styles.work__title}>{data.title}</h3>
          {data.collaborator && (
            <h4 className={styles.work__collaborator}>
              совместно с <strong>{data.collaborator}</strong>
            </h4>
          )}
        </div>
        <div className={styles['work__bottom-icon']}>
          <Image src={LinkArrowSvg} alt='arrow' width={22} height={22}></Image>
        </div>
      </div>
    </li>
  )
}
