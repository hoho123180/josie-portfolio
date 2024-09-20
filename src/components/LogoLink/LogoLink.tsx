import { sourceSans3 } from '@/fonts/fonts'
import { FC } from 'react'
import styles from './LogoLink.module.css'

interface Prop {

}

const LogoLink: FC<Prop> = ({ }) => {
  return (
    <h2 className={`${sourceSans3.className} ${styles.container}`}>
      JOSIE CHEN
    </h2>
  )
}

export default LogoLink