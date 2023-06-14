import { setCookie, getCookies } from 'cookies-next';
import { NextRouter } from 'next/router'

type TypeHandleUtmsProps = {
  readonly router: NextRouter
}

const handleCookiesExpiration = ({ router }: TypeHandleUtmsProps) => {
    const { cl_uid, utm_source, utm_campaign } = router.query;

    console.log('cookies: ', cl_uid, utm_source, utm_campaign)

    const cookieExpiration = new Date();
    cookieExpiration.setDate(cookieExpiration.getDate() + 90);

    setCookie('cl_uid', cl_uid, {
      expires: cookieExpiration,
      path: '/',
    });
    setCookie('utm_source', utm_source, {
      expires: cookieExpiration,
      path: '/',
    });
    setCookie('utm_campaign', utm_campaign, {
      expires: cookieExpiration,
      path: '/',
    });

    const cookies = getCookies();

    const lastUtmSource = cookies.utm_source || '';
    const lastUtmCampaign = cookies.utm_campaign || '';

}

export default handleCookiesExpiration
