import stls from '@/styles/components/general/GeneralLangBtns.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralLangBtnsProps = TypeClassNames

const GeneralLangBtns = ({ classNames }: TypeGeneralLangBtnsProps) => {
  const router = useRouter()

  // const href = router.asPath
  const href = '/'
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Link href={href} locale='uz-UZ'>
        <a className={stls.link}>UZ</a>
      </Link>
      <Link href={href} locale='ru'>
        <a className={stls.link}>RU</a>
      </Link>
      <Link href={href} locale='en-US'>
        <a className={stls.link}>EN</a>
      </Link>
    </div>
  )
}

export default GeneralLangBtns
