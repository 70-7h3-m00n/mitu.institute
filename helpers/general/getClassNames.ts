import { TypeClassNames } from '@/types/index'

type TypegetClassNamesProps = {
  classNames: TypeClassNames
}

type TypeGetClassNamesOutput = {
  [key: string]: boolean
}

const getClassNames = ({
  classNames
}: TypegetClassNamesProps): TypeGetClassNamesOutput => {
  const output: TypeGetClassNamesOutput = {}

  classNames.forEach(className => {
    className && (output[className] = true)
  })

  return output
}

export default getClassNames
