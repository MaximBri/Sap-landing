import { ChangeEvent, FormEvent, useState } from 'react'

interface FormModel {
  name: string
  company: string
  email: string
  empty: string
  error: {
    field: 'name' | 'company' | 'email'
    text: string
  } | null
}

export const useForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isVerify, setIsVerify] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormModel>({
    name: '',
    company: '',
    email: '',
    empty: '',
    error: null,
  })

  const onFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const toggleVerify = () => {
    setIsVerify(!isVerify)
  }

  const isValidEmail = (email: string): boolean => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  }

  const canSend = () => {
    if (formData.empty || isLoading || !isVerify) {
    } else if (!formData.name.trim()) {
      setFormData((prev) => {
        return { ...prev, error: { field: 'name', text: 'Введите имя' } }
      })
    } else if (!formData.company.trim()) {
      setFormData((prev) => {
        return {
          ...prev,
          error: { field: 'company', text: 'Введите название компании' },
        }
      })
    } else if (!isValidEmail(formData.email)) {
      setFormData((prev) => {
        return {
          ...prev,
          error: { field: 'email', text: 'Некорректная почта' },
        }
      })
    } else {
      return true
    }
    return false
  }

  const sendForm = async () => {
    if (!canSend()) return

    setFormData((prev) => {
      return { ...prev, error: null }
    })

    try {
      setIsLoading(true)
      const response = await fetch('/api/send-to-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          empty: formData.empty,
        }),
      })

      console.log(response)

      if (!response.ok) throw new Error('Ошибка отправки')

      setFormData({
        name: '',
        company: '',
        email: '',
        empty: '',
        error: null,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    sendForm()
  }

  return {
    formData,
    handleSubmit,
    onFormDataChange,
    isLoading,
    toggleVerify,
    isVerify,
  }
}
