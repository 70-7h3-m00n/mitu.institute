import stls from '@/styles/components/imgs/general/ImgApplause.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/applause.png'

type TypeImgApplauseProps = TypeClassNames & TypeImg

const ImgApplause = ({ classNames, width, height }: TypeImgApplauseProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'арлодисменты'}
      />
    </>
  )
}

export default ImgApplause