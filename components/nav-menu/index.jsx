import React from 'react';
import Link from 'next/link';
import styles from "./styles.module.css";

const NavMenu = () => {
  return (
    <nav className={styles['navmenu']}>
    <ul>
      <li>
        <Link href="/">Все котики</Link>
      </li>
      <li>
        <Link href="/about">Любимые котики</Link>
      </li>
    
    </ul>
    </nav>
  )
}

export default NavMenu



