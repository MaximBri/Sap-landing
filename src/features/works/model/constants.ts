export interface WorkModel {
  title: string
  tags: string[]
  collaborator?: string
  image?: string
  stack?: string[]
  site?: string
  folder?: string
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
        title: 'сайт для детского парка развлечений ПАКАБАТА',
        tags: ['проектирование', 'дизайн', 'вёрстка'],
        collaborator: 'Mark Weber',
        image: 'main.png',
        stack: ['tilda.svg', 'figma.svg'],
        site: 'pakabata-nn.ru',
        folder: 'sber',
        type: 'large',
      },
      {
        title: 'обозначить возможные каналы продаж для Терра Пи',
        tags: ['маркетинг'],
        collaborator: 'Jekyll&Hyde',
        stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
      },
      {
        title: 'защита персональных данных b_152',
        tags: ['вёрстка'],
        collaborator: 'Jekyll&Hyde',
        stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
      },
      {
        title:
          'Разработка маркетингового плана для привлечения аудитории 18-25 лет',
        tags: ['проектирование', 'дизайн', 'вёрстка'],
        collaborator: 'Mark Weber',
        image: 'main.png',
        stack: ['tilda.svg', 'figma.svg'],
        folder: 'level',
        type: 'large',
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
        image: 'main.png',
        stack: ['tilda.svg', 'figma.svg'],
        folder: 'alice',
        type: 'large',
      },
      {
        title: 'Лендинг для платформы разработки блокчейна',
        tags: ['вёрстка'],
        collaborator: 'Jekyll&Hyde',
        stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
      },
      {
        title: 'Разработка сайта для сети аптек',
        tags: ['вёрстка', 'дизайн', 'разработка'],
        collaborator: 'Jekyll&Hyde',
        stack: ['tilda.svg', 'figma.svg'],
        type: 'small',
      },
      {
        title:
          'Разработка лендинга для AI-стартапа',
        tags: ['разработка', 'проектирование'],
        image: 'main.png',
        stack: ['tilda.svg', 'figma.svg'],
        site: '',
        folder: 'space-chat',
        type: 'large',
      },
    ],
  },
]
