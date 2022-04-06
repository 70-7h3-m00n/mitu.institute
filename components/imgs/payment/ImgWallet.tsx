import stls from '@/styles/components/imgs/payment/ImgWallet.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/wallet.jpg'

type TypeImgWalletProps = TypeClassNames & TypeImg

const ImgWallet = ({ classNames, width, height }: TypeImgWalletProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Кошелек'}
      />
    </>
  )
}

export default ImgWallet
