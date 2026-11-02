import type { Metadata } from 'next'
import React from 'react'

import { SITE_URL, pageMetadata } from '../lib/metadata'

import '../styles/reset.css'
import '../styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(),
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja">
    <body>{children}</body>
  </html>
)

export default RootLayout
