import { TypeClassNames } from '@/types/index'

type TypegetClassNamesProps = TypeClassNames

type TypeGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TypegetClassNamesProps): TypeGetClassNamesOutput => {
  const output: TypeGetClassNamesOutput = {}

  classNames.forEach(className => {
    className && (output[className] = true)
  })

  return output
}

export default getClassNames
