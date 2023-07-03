import { setCookie, getCookies } from 'cookies-next';
import { NextRouter } from 'next/router'

type TypeHandleUtmsProps = {
  readonly route: NextRouter
}

const handleCookiesExpiration = ({ route }: TypeHandleUtmsProps) => {

const utms = route.asPath.split('?')?.[1]?.split('&')?.map(el => ({[el.split('=')[0]]: el.split('=')[1]}))

    const cookieExpiration = new Date();
    cookieExpiration.setDate(cookieExpiration.getDate() + 90);

    if(utms) {
        Object?.keys(utms)?.forEach((key, idx) => {
            const value = Object.values(utms[key as any])[0] 
            setCookie(Object.keys(utms[idx]).toString(), value, {
                expires: cookieExpiration,
                path: '/',
            })})
        }

        

}

export default handleCookiesExpiration

// export default {}