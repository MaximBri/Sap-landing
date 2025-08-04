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
        <Services />
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
