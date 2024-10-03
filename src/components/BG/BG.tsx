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
        width={575 * 2}
        height={650 * 2}
        style={{ position: 'absolute', right: '-10%', top: -100, zIndex: -1, opacity: 0.7, overflow: 'visible' }}
      />
      <Image
        alt='bg-ellipse small'
        src={'/images/bg-S.svg'}
        width={312.46 * 2}
        height={536 * 2}
        style={{ position: 'absolute', left: '-10%', top: 350, opacity: 0.7, zIndex: -2, overflow: 'visible' }}
      />
    </>
  )
}

export default BG