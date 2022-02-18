import mituinstitute from '@/config/mituinstitute'

type TypeLeastDocuments = string[]

const leastDocuments: TypeLeastDocuments = mituinstitute
  ? ['Аттестат / диплом', 'Паспорт', 'Заявление на поступление']
  : ['Документ о предыдущем образовании', 'Паспорт', 'Заявление на поступление']

export default leastDocuments
