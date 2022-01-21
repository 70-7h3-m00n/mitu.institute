import stls from '@/styles/pages/Page500.module.sass'
import { Wrapper } from '@/components/layout'
import { routesFront, phoneNumber } from '@/config/index'
import { BtnAlpha } from '@/components/btns'

const Page500 = () => {
  return (
    <>
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>500</h1>
          <h2 className={stls.h2}>
            Извините! На сервере произошла непредвиденная&nbsp;ошибка
          </h2>
          <p className={stls.p}>
            Пожалуйста, попробуйте позже или позвоните нам по номеру{' '}
            <a href={phoneNumber.href} className={stls.phoneNumber}>
              {phoneNumber.val}
            </a>
          </p>
          <BtnAlpha variant='beta' href={routesFront.home} tag='Link'>
            Вернуться на главную
          </BtnAlpha>
        </div>
      </Wrapper>
    </>
  )
}

export default Page500
