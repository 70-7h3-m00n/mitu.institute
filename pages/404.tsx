import stls from '@/styles/pages/Page404.module.sass'
import { Wrapper } from '@/components/layout'
import { routesFront } from '@/config/index'
import { BtnAlpha } from '@/components/btns'

const Page404 = () => {
  return (
    <>
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>404</h1>
          <h2 className={stls.h2}>
            Извините! Страница, которую Вы ищете, не может быть&nbsp;найдена
          </h2>
          <p className={stls.p}>
            Возможно, запрашиваемая Вами страница была перенесена или удалена.
            Также возможно, Вы допустили небольшую опечатку при вводе адреса —
            такое&nbsp;случается
          </p>
          <BtnAlpha
            variant='beta'
            href={routesFront.home}
            classNames={[stls.btn]}>
            Вернуться на главную
          </BtnAlpha>
        </div>
      </Wrapper>
    </>
  )
}

export default Page404
