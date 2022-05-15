import { OrganizationJsonLd } from 'next-seo'
// import { routes, company } from '@/config/index'

const SeoOrganizationJsonLd = () => {
  return (
    <>
      {/* <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routesFront.defaultRoot}
        logo={`${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIcon512}`}
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
        sameAs={[routesFront.defaultRoot]}
        url={routesFront.defaultRoot}
      /> */}
    </>
  )
}

export default SeoOrganizationJsonLd
