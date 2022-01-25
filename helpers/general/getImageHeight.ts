const getImageHeight = ({
  width,
  widthInitial,
  heightInitial
}: {
  width: number
  widthInitial?: number
  heightInitial?: number
}) => {
  if (!widthInitial || !heightInitial) return width

  const ratio = widthInitial / heightInitial
  const output = Math.round(width / ratio)

  return output
}

export default getImageHeight
