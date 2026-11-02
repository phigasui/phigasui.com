export const SITE_URL = 'https://phigasui.com'
export const SITE_NAME = 'phigasui.com'
export const DEFAULT_DESCRIPTION = 'phigasui official website'
export const DEFAULT_OG_IMAGE = '/images/alpagasui.png'
export const LOCALE = 'ja_JP'

// 相対パスをサイトの絶対 URL にする（OGP の url / image は絶対 URL が必要）
export const absoluteUrl = (path: string) =>
  /^(https?:)?\/\//.test(path) ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
