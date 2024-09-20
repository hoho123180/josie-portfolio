import { HeaderLinks } from '@/configs/links'
import A from '../A'
import Button from '../Button/Button'
import LogoLink from '../LogoLink/LogoLink'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoLink />
        <ul className={styles.linkList}>
          {HeaderLinks.map(({ title, href }) =>
            <A key={title} href={href}>
              <Button
                title={title}
                type='tertiary'
                size='medium'
              />
            </A>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header