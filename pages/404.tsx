import stls from '@/styles/pages/Page404.module.sass'
import { Wrapper } from '@/components/layout'

const Page404 = () => {
  return (
    <>
      <Wrapper>
        <h1 className={stls.title}>404</h1>
        <h2 className={stls.h2}>
          Извините! Страница, которую Вы ищете, не может быть найдена
        </h2>
        <p className={stls.p}>
          Возможно, запрашиваемая Вами страница была перенесена или удалена.
          Также возможно, Вы допустили небольшую опечатку при вводе адреса —
          такое случается.
        </p>
      </Wrapper>
    </>
  )
}

export default Page404
