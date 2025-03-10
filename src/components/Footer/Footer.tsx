import {
  behanceLink,
  FooterLinks,
  gmailLink,
  linkedInLink,
} from '@/configs/links'
import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import A from '../A'
import IconButton from '../IconButton/IconButton'
import LogoLink from '../LogoLink/LogoLink'
import TextLink from '../TextLink/TextLink'
import styles from './Footer.module.css'

interface Prop {}

const Footer: FC<Prop> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerStart}>
          <LogoLink />
          <ul className={styles.linkList}>
            {FooterLinks.map(({ title, href }) => (
              <TextLink key={title} type='secondary' {...{ title, href }} />
            ))}
          </ul>
        </div>

        <div className={styles.footerEnd}>
          <TextLink
            title='hoho123180@gmail.com'
            href={gmailLink}
            type='primary'
            leadingIcon={faEnvelope}
            trailingIcon={faArrowRight}
          />
          <div className={styles.iconLinkContainer}>
            <A href={behanceLink}>
              <IconButton icon={faBehance} type='secondary' />
            </A>
            <A href={linkedInLink}>
              <IconButton icon={faLinkedin} type='secondary' />
            </A>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
