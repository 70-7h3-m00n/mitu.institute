import stls from '@/styles/pages/PageOffine.module.sass'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const PageOffline = () => {
  const at = useAt()
  const company = useCompanyInfo()
  const translations = {
    h2: at.en
      ? "You're offline"
      : at.uz
      ? 'Tarmoqqa ulanish yo‘q'
      : 'Подключение к сети отсутствует',
    p: at.en
      ? 'Please check your internet connection and try again or call us'
      : at.uz
      ? "Keyinroq qayta urinib ko'ring yoki bizga qo'ng'iroq qiling"
      : 'Пожалуйста, попробуйте позже или позвоните нам по номеру',
    phoneNumber: at.en
      ? company.phoneNumber
      : at.uz
      ? company.phoneNumberUz
      : company.phoneNumber
  }

  return (
    <>
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>Zzz...</h1>
          <h2 className={stls.h2}>{translations.h2}</h2>
          <p className={stls.p}>
            {translations.p}{' '}
            <a
              href={translations.phoneNumber.href}
              className={stls.phoneNumber}>
              {translations.phoneNumber.val}
            </a>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default PageOffline
