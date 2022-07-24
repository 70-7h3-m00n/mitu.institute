type TGetGetStaticPathsLocaleProps = {
  defaultLocale?: string
}

const getGetStaticPathsLocale = ({
  defaultLocale
}: TGetGetStaticPathsLocaleProps) => defaultLocale || 'uz'

export default getGetStaticPathsLocale
