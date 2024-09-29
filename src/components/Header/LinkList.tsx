import { HeaderLinks } from '@/configs/links'
import { FC } from 'react'
import A from '../A'
import Button from '../Button/Button'
import styles from './Header.module.css'

interface Prop {

}

const LinkList: FC<Prop> = ({ }) => {
  return (
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
  )
}

export default LinkList