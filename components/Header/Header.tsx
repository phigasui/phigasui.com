import Link from 'next/link'
import styles from './header.module.css'
import { useRouter } from 'next/router'

const menuItemClass = (router, path) => {
  return router.pathname.startsWith(path) ? `${styles.menu_item} ${styles.selected}` : styles.menu_item
}

export const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.top}>
        <img className={styles.image} src="/images/alpagasui.png"/>
        <span className={styles.title}>phigasui.com</span>
      </Link>

      <ul className={styles.menu}>
        <li className={menuItemClass(router, '/abstract')}>
          <Link href="/abstract">
            ABSTRACT
          </Link>
        </li>
        <li className={menuItemClass(router, '/goods')}>
          <Link href="/goods">
            GOODS
          </Link>
        </li>
        <li className={menuItemClass(router, '/sounds')}>
          <Link href="/sounds">
            SOUNDS
          </Link>
        </li>
        <li className={menuItemClass(router, '/accounts')}>
          <Link href="/accounts">
            ACCOUNTS
          </Link>
        </li>
        <li className={menuItemClass(router, '/gallery')}>
          <Link href="/gallery">
            GALLERY
          </Link>
        </li>
        <li className={menuItemClass(router, 'blog')}>
          <Link href="https://blog.phigasui.com">
            BLOG
          </Link>
        </li>
      </ul>
    </div>
  )
}
