import Link from 'next/link'
import styles from './index.module.css'

import { Card } from '../components/Card/Card'

const HomePage = () => {
  return (
    <Card className={styles.card}>
      <div>
        <img className={styles.image} src="/images/alpagasui.png"/>
      </div>
      <div className={styles.top}>
        <h1 className={styles.title}>phigasui.com</h1>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link href="/abstract">
              ABSTRACT
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/goods">
              GOODS
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/sounds">
              SOUNDS
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/accounts">
              ACCOUNTS
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/gallery">
              GALLERY
            </Link>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default HomePage
