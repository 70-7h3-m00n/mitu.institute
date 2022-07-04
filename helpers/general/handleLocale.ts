import { NextRouter } from 'next/router'

type TypeHandleLocaleProps = {
  readonly router: NextRouter
}

const handleLocale = ({ router }: TypeHandleLocaleProps) => {
  const urlParamLocale = router.query.locale

  urlParamLocale && sessionStorage.setItem('locale', urlParamLocale.toString())
}

export default handleLocale
