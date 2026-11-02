import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  LOCALE,
  SITE_NAME,
  absoluteUrl,
} from './config'

interface Props {
  title?: string
  description?: string
  ogImage?: string
  // canonical / og:url 用のパス。省略時は現在のルート
  path?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  path,
  type = 'website',
  noindex = false,
}: Props) => {
  const router = useRouter()
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pagePath = path ?? router.pathname
  const url = absoluteUrl(pagePath)
  const image = absoluteUrl(ogImage)

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} key="description" />
      {!noindex && <link rel="canonical" href={url} key="canonical" />}
      {!noindex && <meta property="og:url" content={url} key="og:url" />}
      {noindex && <meta name="robots" content="noindex" key="robots" />}
      <meta property="og:title" content={pageTitle} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:locale" content={LOCALE} key="og:locale" />
      <meta name="twitter:card" content="summary" key="twitter:card" />
    </Head>
  )
}
