import stls from '@/styles/pages/PageOffine.module.sass'
import { phoneNumber } from '@/config/index'
import { Wrapper } from '@/components/layout'

const PageOffline = () => {
  return (
    <>
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>Zzz...</h1>
          <p className={stls.p}>
            Подключение к сети отсутствует. Пожалуйста, попробуйте позже или
            позвоните нам по номеру{' '}
            <a href={phoneNumber.href}>{phoneNumber.val}</a>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default PageOffline
