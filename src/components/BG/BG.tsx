import { FC } from 'react'
import styles from './BG.module.css'
import Image from 'next/image'

interface Prop {

}

const BG: FC<Prop> = ({ }) => {
  return (
    <>
      <Image
        alt='bg-ellipse large'
        src={'/images/bg-L.svg'}
        width={1119}
        height={1092}
        style={{ position: 'absolute', right: '-30%', top: -250, zIndex: -1, opacity: 0.7, overflow: 'visible' }}
      />
      <Image
        alt='bg-ellipse small'
        src={'/images/bg-S.svg'}
        width={312.46 * 2}
        height={536 * 2}
        style={{ position: 'absolute', left: '-20%', top: 400, opacity: 0.7, zIndex: -2, overflow: 'visible' }}
      />
    </>
  )
}

export default BG