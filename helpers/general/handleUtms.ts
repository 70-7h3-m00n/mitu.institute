import { NextRouter } from 'next/router'

type TypeHandleUtmsProps = {
  router: NextRouter
}

const handleUtms = ({ router }: TypeHandleUtmsProps) => {
  const utms = JSON.parse(sessionStorage.getItem('utms') || '{}')
  let utmsAreEmpty = false

  for (const key in utms) {
    if (utms.hasOwnProperty(key)) {
      utmsAreEmpty = true
      break
    }
  }

  if (!utmsAreEmpty) {
    const urlUtmsArr = router.asPath.split('?')[1]

    urlUtmsArr &&
      urlUtmsArr.split('&').forEach(utm => {
        utms[utm.split('=')[0]] = utm.split('=')[1]
      })
    sessionStorage.setItem('utms', JSON.stringify(utms))
  }
}

export default handleUtms
