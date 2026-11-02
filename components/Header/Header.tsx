'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import { usePathname } from 'next/navigation'

const menuItemClass = (pathname: string, path: string) => {
  return pathname.startsWith(path) ? `${styles.menu_item} ${styles.selected}` : styles.menu_item
}

export const Header = () => {
  const pathname = usePathname() ?? ''

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.top}>
        <Image
          className={styles.image}
          src="/images/alpagasui.png"
          alt="alpagasui"
          width={50}
          height={50}
        />
        <span className={styles.title}>phigasui.com</span>
      </Link>

      <ul className={styles.menu}>
        <li className={menuItemClass(pathname, '/abstract')}>
          <Link href="/abstract">
            ABSTRACT
          </Link>
        </li>
        <li className={menuItemClass(pathname, '/goods')}>
          <Link href="/goods">
            GOODS
          </Link>
        </li>
        <li className={menuItemClass(pathname, '/sounds')}>
          <Link href="/sounds">
            SOUNDS
          </Link>
        </li>
        <li className={menuItemClass(pathname, '/accounts')}>
          <Link href="/accounts">
            ACCOUNTS
          </Link>
        </li>
        <li className={menuItemClass(pathname, '/gallery')}>
          <Link href="/gallery">
            GALLERY
          </Link>
        </li>
        <li className={menuItemClass(pathname, 'blog')}>
          <Link href="https://blog.phigasui.com">
            BLOG
          </Link>
        </li>
      </ul>
    </div>
  )
}
