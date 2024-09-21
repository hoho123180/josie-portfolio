import { FC } from 'react'
import styles from './HeroSection.module.css'
import Image from 'next/image'

interface Prop {

}

const HeroSection: FC<Prop> = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

      </div>
      <div className={styles.heroImageContainer}>
        <Image
          fill
          loading='eager'
          alt='Josie using laptop'
          src={'/images/hero-base.png'}
        />
        <div className={styles.box1}>
          <Image
            fill
            loading='eager'
            alt='B2B & B2C Saas Product'
            src={'/images/1Uiux.png'}
          />
        </div>
        <div className={styles.box2}>
          <Image
            fill
            loading='eager'
            alt='Josie using laptop'
            src={'/images/2Graphic.png'}
          />
        </div>
        <div className={styles.box3}>
          <Image
            fill
            loading='eager'
            alt='Josie using laptop'
            src={'/images/3Data.png'}
          />
        </div>
        <div className={styles.box4}>
          <Image
            fill
            loading='eager'
            alt='Josie using laptop'
            src={'/images/4Code.png'}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection