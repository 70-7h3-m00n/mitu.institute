import stls from '@/styles/pages/PageContact.module.sass'
import type { NextPage } from 'next'
import { Fragment, useContext, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import cn from 'classnames'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
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
import {
  ImgContactMapMoscow,
  ImgContactMapAlmaty,
  ImgContactMapTashkent
} from '@/components/imgs'
import { IconLocation } from '@/components/icons'

const PageContact: NextPage<TypePageHomeProps> = ({
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

  const translations = {
    contacts: at.en ? 'Contact' : at.uz ? 'Aloqa' : 'Контакты',
    showRequisites: at.en
      ? 'Show legal details'
      : at.uz
      ? "Tafsilotlarni ko'rsatish"
      : 'Показать юридические реквизиты',
    hideRequisites: at.en
      ? 'Hide legal details'
      : at.uz
      ? 'Tafsilotlarni yashirish'
      : 'Скрыть юридические реквизиты'
  }

  useEffect(() => {
    setCategories({
      categories,
      curCategory:
        categories?.filter(
          category => category?.slug === categories?.[0]?.slug
        )?.[0] || null,
      curCategorySlug: categories?.[0]?.slug || null
    })
    setStudyField(null)
    setPrograms(programs || null)
    setQuestions(questions || null)
    setProgram(null)
  }, [categories, programs, questions])

  const seoParams = {
    title: `${translations.contacts} | ${company.name}`,
    desc: `${company.tagline}`,
    canonical: `${routesFront.officialRoot}${routesFront.legal}`
  }

  const list = [
    {
      city: company.address.city,
      address: `${company.address.street.name} ${company.address.street.type}, ${company.address.street.door}`,
      phoneNumbers: [company.phoneNumber, company.phoneNumberAlt],
      email: company.email,
      img: <ImgContactMapMoscow classNames={[stls.img]} />,
      extraLegalInfo: true
    },
    {
      city: company.addressKz.city,
      address: `${company.addressKz.street.type} ${company.addressKz.street.name}, ${company.addressKz.street.door}, ${company.addressKz.street.room}, ${company.addressKz.street.block.type} ${company.addressKz.street.block.number}, ${company.addressKz.street.office.type} ${company.addressKz.street.office.number}`,
      phoneNumbers: [
        company.phoneNumberKz,
        company.phoneNumberKzAlt,
        company.phoneNumberKzAlt2
      ],
      email: company.emailKz,
      img: <ImgContactMapAlmaty classNames={[stls.img]} />
    },
    {
      city: company.addressUz.city,
      address: `${company.addressUz.street.typeShort} ${company.addressUz.street.name}, ${company.addressUz.street.door}, ${company.addressUz.street.room}`,
      phoneNumbers: [company.phoneNumberUz],
      email: company.emailUz,
      img: <ImgContactMapTashkent classNames={[stls.img]} />
    }
  ]

  const [extraLegalInfoShown, setExtraLegalInfoShown] = useState(false)

  const extraLegalInfo = [
    {
      title: 'Юридические реквизиты',
      items: [
        'Фактический адрес: 115114, Москва, наб. Дербеневская, дом 11',
        'Электронная почта: info@mitu.institute',
        'Телефоны: +7 (495) 648-62-26 / +7 (800) 444-81-38',
        'Полное наименование – Образовательная автономная некоммерческая организация дополнительного профессионального образования «Московский институт технологий и управления»',
        'Сокращенное наименование – ОАНО ДПО «МИТУ»',
        'Юридический адрес: 115114, г. Москва, набережная Дербеневская, д. 11, пом. 13',
        'ИНН 9725017985',
        'КПП 772501001',
        'Расчетный счет 40703810138000003124 в ПАО СБЕРБАНК, к/с 30101810400000000225, БИК 044525225',
        'ОКВЭД 85.42',
        'ОГРН 1197700011519'
      ]
    }
  ]

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
      <section>
        <Wrapper>
          <h1 className={stls.title}>{translations.contacts}</h1>

          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li
                key={`contact__item-${item.city}-${idx}`}
                className={stls.listItem}>
                <div className={stls.left}>
                  <div className={stls.iconContainer}>
                    <IconLocation classNames={[stls.icon]} />
                  </div>
                  <h2 className={stls.city}>{item.city}</h2>
                  <p className={cn(stls.address, stls.p)}>{item.address}</p>
                  <p className={cn(stls.phoneNumbers, stls.p)}>
                    {item.phoneNumbers.map((number, idx) => (
                      <>
                        {idx !== 0 && ' / '}
                        <a
                          key={`${number.val}-${idx}`}
                          className={cn(stls.numberLink, stls.link)}
                          href={number.href}>
                          {number.val}
                        </a>
                      </>
                    ))}
                  </p>
                  <p className={cn(stls.email, stls.p)}>
                    <a
                      href={item.email.href}
                      className={cn(stls.emailLink, stls.link)}>
                      {item.email.val}
                    </a>
                  </p>
                  {item?.extraLegalInfo && at.ru && (
                    <div className={cn(stls.extraLegalInfoContainer)}>
                      <button
                        tabIndex={0}
                        className={cn(
                          stls.p,
                          stls.link,
                          stls.toggleExtraLegalInfo
                        )}
                        onClick={() =>
                          setExtraLegalInfoShown(prevState => !prevState)
                        }>
                        {extraLegalInfoShown
                          ? translations.hideRequisites
                          : translations.showRequisites}
                      </button>
                      {extraLegalInfoShown && (
                        <div className={stls.extraLegalInfoShownContainer}>
                          {extraLegalInfo.map((info, idx) => (
                            <Fragment key={`${info.title}-${idx}`}>
                              <h3
                                className={cn(
                                  stls.p,
                                  stls.extraLegalInfo,
                                  stls.fw600
                                )}>
                                {info.title}
                              </h3>
                              {info.items.map((item, idx) => (
                                <p
                                  key={`${item}-${idx}`}
                                  className={cn(stls.p, stls.extraLegalInfo)}>
                                  {item}
                                </p>
                              ))}
                            </Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className={stls.right}>{item.img}</div>
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>
    </>
  )
}

export default PageContact

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
