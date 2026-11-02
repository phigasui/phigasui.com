import type { Metadata } from 'next'

export const SITE_NAME = 'phigasui.com'
export const SITE_URL = 'https://phigasui.com'
export const DEFAULT_DESCRIPTION = 'phigasui official website'
const DEFAULT_OG_IMAGE = '/images/alpagasui.png'

interface Options {
  title?: string
  description?: string
  ogImage?: string
}

// Build per-page metadata. openGraph is not merged with the layout's,
// so og:title / og:description are set here for every page.
export const pageMetadata = ({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
}: Options = {}): Metadata => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary',
    },
  }
}
