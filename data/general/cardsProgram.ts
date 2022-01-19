import { TypeProgramCategory } from '@/types/index'

type TypeCardsProgram = {
  category: TypeProgramCategory
  faculty: {
    type: string
    label: string
  }
  title: string
  desc: string
  studyMonths: number
}[]

const cardsProgram: TypeCardsProgram = [
  {
    category: 'master',
    faculty: {
      type: 'computer science',
      label: 'Факультет компьютерных наук'
    },
    title: 'Управление организацией',
    desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
    studyMonths: 16
  },
  {
    category: 'master',
    faculty: {
      type: 'management',
      label: 'Факультет управления'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'master',
    faculty: {
      type: 'psychology',
      label: 'Факультет психологии'
    },
    title: 'Менеджмент наукоемких производств нефтегазохимического комплекса',
    desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
    studyMonths: 8
  },
  {
    category: 'master',
    faculty: {
      type: 'computer science',
      label: 'Факультет компьютерных наук'
    },
    title: 'Управление организацией',
    desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
    studyMonths: 16
  },
  {
    category: 'master',
    faculty: {
      type: 'management',
      label: 'Факультет управления'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'master',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'bachelor',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'bachelor',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'bachelor',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'additional',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'additional',
    faculty: {
      type: 'cybersport',
      label: 'Факультет киберспорта'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  },
  {
    category: 'additional',
    faculty: {
      type: 'cybersport',
      label: 'Факультет психологии'
    },
    title: 'Управление организацией',
    desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
    studyMonths: 12
  }
]

export default cardsProgram