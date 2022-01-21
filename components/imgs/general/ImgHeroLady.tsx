import stls from '@/styles/components/imgs/general/ImgHeroLady.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Head from 'next/head'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/hero-lady.png'

type TypeImgHeroLadyProps = TypeClassNames & TypeImg

const ImgHeroLady = ({ classNames, width, height }: TypeImgHeroLadyProps) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href={'/assets/imgs/general/hero-lady.png'}
          as='image'
        />
      </Head>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Девушка улыбается'}
      />
    </>
  )
}

export default ImgHeroLady
