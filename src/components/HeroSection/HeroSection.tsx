import { FC } from 'react'
import styles from './HeroSection.module.css'

interface Prop {

}

const HeroSection: FC<Prop> = ({ }) => {
  return (
    <div className={styles.container}>
      HeroSection
    </div>
  )
}

export default HeroSection