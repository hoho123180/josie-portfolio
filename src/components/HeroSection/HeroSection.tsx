import { gmailLink, resumeLink } from '@/configs/links'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { FC } from 'react'
import A from '../A'
import Button from '../Button/Button'
import RotatingText from '../RotatingText/RotatingText'
import DialogAnimation from './DialogAnimation'
import styles from './HeroSection.module.css'

interface Prop {}

const HeroSection: FC<Prop> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.heroHeader}>
          <Image
            width={80}
            height={80}
            loading='eager'
            alt="josie's selfi"
            src={'/images/josie-profile-photo.png'}
          />
          <DialogAnimation />
        </header>

        {/* <h1>
          I&apos;m Josie Chen - focusing on creating intuitive, impactful
          designs
        </h1> */}

        <h1>Hi! I&apos;m Josie Chen.</h1>

        <div className={styles.subtitleGroup}>
          <span>I focusing on creating</span>
          <span className={styles.noWrap}>
            <RotatingText
              texts={['Intuitive', 'Impactful', 'User-centric', ' Data-driven']}
              mainClassName={styles.rotatingText}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            <span>designs</span>
          </span>
        </div>

        <p>
          Senior product designer with 5 years work experience, expertise in
          managing complex B2C and B2B projects from concept to launch.
        </p>

        <div className={styles.buttonGroup}>
          <A href={resumeLink}>
            <Button
              title='Download Resume'
              trailingIcon={faArrowDown}
              trailingIconSize={24}
              size='medium'
              type='primary'
            />
          </A>
          <A href={gmailLink}>
            <Button
              title='Contact Me'
              trailingIcon={faEnvelope}
              trailingIconSize={24}
              size='medium'
              type='secondary'
            />
          </A>
        </div>
      </div>
      {/* <div className={styles.heroImageContainer}>
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
      </div> */}
    </div>
  )
}

export default HeroSection
