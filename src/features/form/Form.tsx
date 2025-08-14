'use client'

import { Email } from '@/shared/config/private'
import { useForm } from '@/shared/hooks/useForm'
import Link from 'next/link'
import styles from './Form.module.scss'

export const Form = () => {
  const {
    formData,
    handleSubmit,
    onFormDataChange,
    isLoading,
    toggleVerify,
    isVerify,
  } = useForm()

  return (
    <div className={styles.form__wrapper}>
      <section className={`container ${styles.form}`} id='form'>
        <div className={styles.form__texts}>
          <h2 className={styles.form__title}>Давайте начнем!</h2>
          <a className={styles.form__email} href={`mailto:${Email}`}>
            {Email}
          </a>
        </div>
        <form className={styles.form__form} onSubmit={handleSubmit}>
          <label className={styles['form__form-title']}>
            Улучшим ваш бизнес вместе?
          </label>
          <input
            className={styles['form__form-input']}
            value={formData.name}
            onChange={onFormDataChange}
            name='name'
            type='text'
            placeholder='Имя'
          />
          <span
            className={
              formData.error?.field === 'name'
                ? styles['form__form-error--visible']
                : styles['form__form-error']
            }
          >
            {formData.error?.text}
          </span>
          <input
            className={styles['form__form-input']}
            value={formData.company}
            onChange={onFormDataChange}
            name='company'
            type='text'
            placeholder='Компания'
          />
          <span
            className={
              formData.error?.field === 'company'
                ? styles['form__form-error--visible']
                : styles['form__form-error']
            }
          >
            {formData.error?.text}
          </span>
          <input
            className={styles['form__form-input']}
            value={formData.email}
            onChange={onFormDataChange}
            name='email'
            type='text'
            placeholder='Email'
          />
          <span
            className={
              formData.error?.field === 'email'
                ? styles['form__form-error--visible']
                : styles['form__form-error']
            }
          >
            {formData.error?.text}
          </span>
          <input
            className={styles['form__form-input--hidden']}
            name='empty'
            onChange={onFormDataChange}
            placeholder='Не заполняйте это поле'
            type='text'
          />
          <button
            className={styles['form__form-button']}
            type='submit'
            disabled={isLoading}
          >
            Отправить
          </button>
          <div className={styles['form__form-verify']}>
            <button
              className={`${styles['form__form-verify-button']} ${
                isVerify ? styles['form__form-verify-button--checked'] : ''
              }`}
              type='button'
              onClick={toggleVerify}
            ></button>
            <span className={styles['form__form-verify-text']}>
              Нажав кнопку, соглашаетесь с{' '}
              <Link href={'#'}>privacy policy</Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  )
}
