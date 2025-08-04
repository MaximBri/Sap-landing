import type { Metadata } from 'next'
import './styles/reset.scss'
import './styles/globals.scss'
import './styles/fonts.scss'

export const metadata: Metadata = {
  title: 'Маркетинговое агентство SAP',
  description:
    'Премиальное маркетинговое агентство: глубокий анализ ЦА и конкурентов, позиционирование бренда, создание сайтов, SEO, e-mail маркетинг, реклама в VK, Яндекс.Директ и Telegram. Стратегии, которые работают на рост бизнеса.',
  openGraph: {
    title: 'Маркетинговое агентство SAP',
    description:
      'Премиальное маркетинговое агентство: глубокий анализ ЦА и конкурентов, позиционирование бренда, создание сайтов, SEO, e-mail маркетинг, реклама в VK, Яндекс.Директ и Telegram. Стратегии, которые работают на рост бизнеса.',
    // url: 'https://design.space-chat.ai',
    // siteName: 'SpaceChat',
    // images: [
    //   {
    //     url: 'https://design.space-chat.ai/images/share-logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'SpaceChat Logo',
    //   },
    // ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Маркетинговое агентство SAP',
    description:
      'Премиальное маркетинговое агентство: глубокий анализ ЦА и конкурентов, позиционирование бренда, создание сайтов, SEO, e-mail маркетинг, реклама в VK, Яндекс.Директ и Telegram. Стратегии, которые работают на рост бизнеса.',
    // creator: '@spacechat',
    // images: ['https://design.space-chat.ai/images/share-logo.png'],
  },
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  )
}
