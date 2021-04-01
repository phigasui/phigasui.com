import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>phigasui.com</h1>
      <ul>
        <li>
          <Link href="/abstract">
            ABSTRACT
          </Link>
        </li>
        <li>
          <Link href="/goods">
            GOODS
          </Link>
        </li>
        <li>
          <Link href="/sounds">
            SOUNDS
          </Link>
        </li>
        <li>
          <Link href="/accounts">
            ACCOUNTS
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            GALLERY
          </Link>
        </li>
        <li>
          <Link href="/editor">
            EDITOR
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
