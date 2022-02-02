type TypeSortBasedOnNumericOrderProps = any[] | null

const sortBasedOnNumericOrder = (arr: TypeSortBasedOnNumericOrderProps) =>
  [...(arr || [])].sort(
    (a, b) =>
      Number(a?.numeric_order?.index || Infinity) -
      Number(b?.numeric_order?.index || Infinity)
  )

export default sortBasedOnNumericOrder
