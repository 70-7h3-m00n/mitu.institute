import stls from '@/styles/pages/PageOffine.module.sass'
import { phoneNumber } from '@/config/index'
import { Wrapper } from '@/components/layout'

const PageOffline = () => {
  return (
    <>
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>Zzz...</h1>
          <h2 className={stls.h2}>Подключение к сети отсутствует</h2>
          <p className={stls.p}>
            Пожалуйста, попробуйте позже или позвоните нам по номеру{' '}
            <a href={phoneNumber.href}>{phoneNumber.val}</a>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default PageOffline
