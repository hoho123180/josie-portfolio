'use client'
import { FC, useState } from 'react';
import styles from './Header.module.css';

interface Prop {

}

const NavBurger: FC<Prop> = ({ }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => setIsBurgerOpen(prev => !prev)
  return (
    <div className={styles.burger} onClick={toggleBurger} >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  )
}

export default NavBurger