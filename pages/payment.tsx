import stls from '@/styles/pages/PagePayment.module.sass'
import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useEffect, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront, routesExternal, company } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextQuestionsContext,
  ContextProgramContext
} from '@/context/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgWallet } from '@/components/imgs'

const PagePayment: NextPage<TypePageHomeProps> = ({
  categories,
  programs,
  questions
}) => {
  const at = useAt()
  const company = useCompanyInfo()

  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })
    setStudyField({ payload: null })
    setPrograms({ payload: programs })
    setQuestions({ payload: questions })
    setProgram({ payload: null })
  }, [categories, programs, questions])

  const translations = {
    paymentSystems: [
      'Visa International',
      'Mastercard Worldwide',
      'JCB',
      'МИР'
    ],
    notedPoints: at.uz
      ? [
          "To'lov uchun (kartangizning tafsilotlarini kiritish) siz Sberbank to'lov shlyuziga yo'naltirilasiz. To'lov shlyuziga ulanish va ma'lumotlarni uzatish SSL shifrlash protokoli yordamida xavfsiz rejimda amalga oshiriladi. Agar sizning bankingiz Visa, MasterCard SecureCode, MIR qabul qilish, J-Secure tomonidan tasdiqlangan Internet-to'lovlarni xavfsiz o'tkazish texnologiyasini qo'llab-quvvatlasa, to'lovni amalga oshirish uchun maxsus parol talab qilinishi mumkin",
          "Qaytarilgan taqdirda, qaytarish muddati ta'lim materiallari olingan kundan boshlab 30 kun. O'tkazilgan mablag'larni qaytarish 5-30 ish kuni ichida bank hisobingizga o'tkaziladi (muddat bank kartangizni bergan bankka bog'liq)",
          "Ushbu sayt 256 bitli shifrlashni qo'llab-quvvatlaydi. Shaxsiy ma'lumotlarning maxfiyligi \"Sberbank\" YOAJ tomonidan ta'minlanadi. Kiritilgan ma'lumotlar Rossiya federatsiyasi qonunlarida nazarda tutilgan hollar bundan mustasno, uchinchi shaxslarga berilmaydi. Bank kartalari bo'yicha to'lovlarni amalga oshirish Mir, Visa Int to'lov tizimlari talablariga qat'iy muvofiq holda amalga oshiriladi., MasterCard Europe Sprl, JCB",
          "Iltimos, to'lov sahifasida shartnomaning nomi va raqamini ko'rsatishni unutmang"
        ]
      : [
          'Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля',
          'В случае возврата, срок возврата составляет 30 дней с момента получения образовательных материалов. Возврат переведённых средств производится на Ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал Вашу банковскую карту)',
          'Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB',
          'Пожалуйста, не забудьте указать ФИО и номер договора на странице с оплатой'
        ],
    paymentMethods: at.uz ? "To'lov usullari" : 'Способы оплаты',
    bankCard: at.uz ? 'Bank kartasi bilan' : 'Банковской картой',
    bankCardDesc: at.uz
      ? "O'qish uchun to'lovni amalga oshirish uchun, bank kartasidan foydalanib, quyidagi sahifada siz bank kartasi bilan to'lov tugmasini bosishingiz kerak. To'lov quyidagi to'lov tizimlarining bank kartalaridan foydalangan holda Sberbank PJSC orqali amalga oshiriladi:"
      : 'Для проведения оплаты обучения, с помощью банковской карты, ниже на этой странице необходимо нажать кнопку Оплата банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:',
    bankCardPayment: at.uz
      ? "Bank kartasi bilan to'lash"
      : 'Оплата банковской картой',
    help: at.uz ? 'Yordam' : 'Помощь'
  }

  const seoParams = {
    title: `${translations.paymentMethods} | ${company.name}`,
    desc: truncate(translations.notedPoints.join('. '), 120),
    canonical: `${routesFront.officialRoot}${routesFront.payment}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routesFront.root}
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`}
        legalName={company.fullName}
        name={company.name}
        address={{
          streetAddress: `${company.address.street.typeShort} ${company.address.street.name} ${company.address.street.door}, ${company.address.street.room}`,
          addressLocality: company.address.city,
          postalCode: company.address.zip,
          addressCountry: company.address.countryCode
        }}
        contactPoints={[
          {
            telephone: company.phoneNumber.val,
            contactType: company.phoneNumber.contactType,
            areaServed: company.phoneNumber.areaServed,
            availableLanguage: company.languages
          }
        ]}
        sameAs={[routesFront.root]}
        url={routesFront.root}
      />
      <section className={stls.sectionHero}>
        <Wrapper>
          <h1 className={stls.title}>{translations.paymentMethods}</h1>
          <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
            {translations.bankCard}
          </GeneralSectionTitle>
          <div className={stls.content}>
            <div className={stls.left}>
              <p className={stls.p}>{translations.bankCardDesc}</p>

              <ul className={stls.paymentSystems}>
                {translations.paymentSystems.map((item, idx) => (
                  <li key={`${item}-${idx}`} className={stls.paymentSystem}>
                    <p className={stls.paymentSystemP}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={stls.right}>
              <ImgWallet />
            </div>
          </div>
          <div className={stls.btns}>
            <BtnAlpha
              variant='delta'
              classNames={[stls.btnVDelta]}
              tag='a'
              href={routesExternal.payment}
              target={'_blank'}>
              {translations.bankCardPayment}
            </BtnAlpha>

            <Popup
              trigger={() => (
                <BtnAlpha
                  variant='delta-reverse'
                  classNames={[stls.btnVDeltaReverse]}>
                  {translations.help}
                </BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {(close: MouseEventHandler) => (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )}
            </Popup>
          </div>
        </Wrapper>
      </section>
      <section className={stls.sectionNotedPoints}>
        <Wrapper>
          <ul className={stls.notedPoints}>
            {translations.notedPoints.map((item, idx) => (
              <li
                key={`PagePayment_notedPoints_item-${idx}`}
                className={stls.notedPoint}>
                <p className={stls.notedPointP}>{item}</p>
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>
    </>
  )
}

export default PagePayment

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
