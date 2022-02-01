import { TypeLibProgram } from '@/types/index'

type TypeLeadProps = {
  id: string
  program: TypeLibProgram
  googleClientId: string | null
}

const lead = ({ id, program, googleClientId }: TypeLeadProps) => {
  window.dataLayer?.push({
    event: 'lead',
    ecommerce: {
      add: {
        actionField: {
          id,
          googleClientId
        },
        products: [
          {
            id: program?.id,
            name: program?.title,
            price: program?.timenprice?.[0]?.price,
            category: program?.category?.label,
            studyField: program?.study_field?.type
          }
        ]
      }
    }
  })
}

export default lead
