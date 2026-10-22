import Head from 'next/head'

interface Props {
  title?: string
  description?: string
  ogImage?: string
}

const SITE_NAME = 'phigasui.com'
const DEFAULT_DESCRIPTION = 'phigasui official website'

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = '/images/alpagasui.png',
}: Props) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={pageTitle} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={ogImage} key="og:image" />
      <meta name="twitter:card" content="summary" key="twitter:card" />
    </Head>
  )
}
