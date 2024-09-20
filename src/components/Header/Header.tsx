import { sourceSans3 } from '@/fonts/fonts'
import A from '../A'
import Button from '../Button/Button'
import styles from './Header.module.css'

const Links = [
  { title: 'About', href: 'https://www.cake.me/pdf/s--UYRvRLhOa6IO3i65gyUk3w--/ZE0m48.pdf' },
  { title: 'Blog', href: 'https://josie-chen.medium.com/' },
  { title: 'Contact', href: 'mail.google.com/mail/?view=cm&fs=1&tf=1&to=hoho123180@gmail.com' },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 className={`${sourceSans3.className} ${styles.name}`}>JOSIE CHEN</h2>
        <ul className={styles.linkList}>
          {Links.map(({ title, href }) =>
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