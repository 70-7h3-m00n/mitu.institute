import { TypeClassNames } from '@/types/index'

type TypegetClassNamesProps = TypeClassNames

type TypeGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TypegetClassNamesProps): TypeGetClassNamesOutput =>
  classNames.reduce((acc, cur) => cur && { ...acc, [cur]: true }, {})

export default getClassNames
