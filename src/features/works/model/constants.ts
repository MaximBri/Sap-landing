export interface WorkModel {
  title: string
  tags: string[]
  collaborator?: {
    name: string
    link: string
  }
  image?: string
  stack?: string[]
  site?: string
  folder?: string
  link: string
  type: 'large' | 'small'
}

export interface WorkCategory {
  title: string
  techname: string
  works: WorkModel[]
}

export const worksList: WorkCategory[] = [
  {
    title: 'Маркетинг',
    techname: 'marketing',
    works: [
      {
        title: 'SWOT-анализ компании Сбер Акселератор',
        tags: ['маркетинг'],
        // collaborator: { name: 'Mark Weber', link: '#' },
        image: 'sber.svg',
        // stack: ['tilda.svg', 'figma.svg'],
        site: 'pakabata-nn.ru',
        folder: 'sber',
        type: 'large',
        link: '',
      },
      {
        title: 'Обозначить возможные каналы продаж для Терра Пи',
        tags: ['маркетинг'],
        // collaborator: { name: 'Jekyll&Hyde', link: '#' },
        // stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
        link: '',
      },
      {
        title: 'Защита персональных данных b_152',
        tags: ['маркетинг'],
        // collaborator: { name: 'Jekyll&Hyde', link: '#' },
        // stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
        link: '',
      },
      {
        title: 'Разработка маркетингового плана для компании Level Group',
        tags: ['маркетинг'],
        // collaborator: { name: 'Jekyll&Hyde', link: '#' },
        image: 'level.jpg',
        // stack: ['tilda.svg', 'figma.svg'],
        folder: 'level',
        type: 'large',
        link: '',
      },
    ],
  },
  {
    title: 'Web-сайты',
    techname: 'web',
    works: [
      {
        title: 'Сайт для FULLSTACK разработчика',
        tags: ['проектирование', 'разработка', 'адаптивность', 'тёмная тема'],
        image: 'logo.png',
        // stack: ['tilda.svg', 'figma.svg'],
        // collaborator: { name: 'MaximBars', link: 'https://t.me/Maxim_Bars' },
        folder: 'alice',
        type: 'large',
        link: 'https://maximbri.github.io/AliceWebSite/',
      },
      {
        title: 'Лендинг для платформы разработки блокчейна',
        tags: ['вёрстка'],
        // collaborator: { name: 'MaximBars', link: 'https://t.me/Maxim_Bars' },
        // stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
        link: 'https://maximbri.github.io/Exploit/',
      },
      {
        title: 'Разработка сайта для аренды квартир',
        tags: ['вёрстка', 'дизайн', 'разработка'],
        // collaborator: { name: 'MaximBars', link: 'https://t.me/Maxim_Bars' },
        // stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
        link: 'https://maximbri.github.io/Rent-Apartments-59/',
      },
      {
        title: 'Разработка лендинга для AI-стартапа',
        tags: ['разработка', 'проектирование'],
        image: 'logo.png',
        // stack: ['tilda.svg', 'figma.svg'],
        // collaborator: { name: 'MaximBars', link: 'https://t.me/Maxim_Bars' },
        site: 'https://space-chat.ai/',
        folder: 'space-chat',
        type: 'large',
        link: 'https://space-chat.ai/',
      },
    ],
  },
]
