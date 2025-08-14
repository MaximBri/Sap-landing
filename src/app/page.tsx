import { About } from '@/widgets/about'
import { Footer } from '@/app/footer'
import { Header } from '@/app/header/Header'
import { KeyWords } from '@/widgets/key-words'
import { Main } from '@/widgets/main'
import { PaymentStages } from '@/widgets/payment-stages'
import { Quote } from '@/widgets/quote'
import { Services } from '@/widgets/services'
import { Works } from '@/features/works'
import { Form } from '@/features/form'
import { Reviews } from '@/features/reviews'

export default function Home() {
  return (
    <>
      <div className='decor'>
        <Header />
        <Main />
      </div>
      <KeyWords />
      <About />
      <div className='decor-2'>
        <Services
          title='Маркетинговые анализы'
          abilityList={['Анализ целевой аудитории', 'Конкурентный анализ']}
          price='100 000'
          isMain={true}
          sideList={[
            { title: 'Маркетинговые анализы', link: '#marketing' },
            { title: 'Позиционирование бренда', link: '#brand' },
            { title: 'Продвижение в интернете', link: '#promotion' },
            { title: 'Сайт и его оптимизация', link: '#development' },
          ]}
          id='marketing'
        />
        <Services
          title='Позиционирование бренда'
          subtitle='Формируем уникальное торговое предложение, определяем место бренда, которое он должен занять в голове клиента.'
          price='100 000'
          id='brand'
        />
        <Services
          title='Продвижение в интернете'
          abilityList={[
            'во ВКонтакте',
            'через Яндекс.Директ',
            'в Telegram Ads',
            'E-mail маркетинг',
          ]}
          price='150 000'
          id='promotion'
        />
        <Services
          title='Сайт и его оптимизация'
          abilityList={['Создание сайтов', 'SEO продвижение']}
          price='150 000'
          id='development'
        />
        <Works />
        <Quote />
      </div>
      <PaymentStages />
      <Reviews />
      <Form />
      <Footer />
    </>
  )
}
