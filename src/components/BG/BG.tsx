import Image from 'next/image'
import { FC } from 'react'

interface Prop {

}

const BG: FC<Prop> = ({ }) => {
  return (
    <>
      <Image
        alt='bg-ellipse large'
        src={'/images/bg-L.webp'}
        width={1119}
        height={1092}
        style={{
          position: 'absolute',
          top: -400,
          left: '50%',
          transform: 'translateX(5%)',
          zIndex: -1,
          opacity: 1,
          overflow: 'visible',
        }}
      />
      <Image
        alt='bg-ellipse small'
        src={'/images/bg-S.webp'}
        width={783 * 1.3}
        height={852 * 1.3}
        style={{
          position: 'absolute',
          top: 100,
          left: '50%',
          transform: 'translateX(-120%)',
          opacity: 1,
          zIndex: -2,
          overflow: 'visible',
        }}
      />
    </>
  )
}

export default BG