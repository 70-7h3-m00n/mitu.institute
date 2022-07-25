import stls from '@/styles/components/imgs/payment/ImgWallet.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/wallet.jpg'

type TypeImgWalletProps = TypeClassNames & TypeImg

const ImgWallet = ({ classNames, width, height }: TypeImgWalletProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/payment/wallet.jpg'

  const translations = {
    alt: at.uz ? 'Hamyon' : 'Кошелек'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
      />
    </>
  )
}

export default ImgWallet
