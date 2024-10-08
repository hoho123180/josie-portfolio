import Image from 'next/image'
import { FC } from 'react'

interface Prop {

}

const BG: FC<Prop> = ({ }) => {
  return (
    <div style={{ width: '200%', maxWidth: 2396, minWidth: 1400, position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: -1 }}>
      <Image
        alt='bg-ellipse large'
        src={'/images/bg-L.webp'}
        width={1119}
        height={1092}
        style={{
          position: 'absolute',
          top: 'max(-400px, calc(-400px + (1500px - 100vw) * 0.1))',
          right: '0%',
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
          top: 'max(100px, calc(100px + (1500px - 100vw) * 0.3))',
          left: '0%',
          opacity: 1,
          zIndex: -2,
          overflow: 'visible',
        }}
      />
    </div>
  )
}

export default BG