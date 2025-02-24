import { HeaderLinks } from '@/configs/links'
import A from '../A'
import Button from '../Button/Button'
import LogoLink from '../LogoLink/LogoLink'
import styles from './Header.module.css'
import NavBurger from './NavBurger'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoLink />
        <ul className={styles.linkList}>
          {HeaderLinks.map(({ title, href }) => (
            <A key={title} href={href}>
              <Button title={title} type='tertiary' size='medium' />
            </A>
          ))}
        </ul>
        <NavBurger />
      </div>
    </header>
  )
}

export default Header
