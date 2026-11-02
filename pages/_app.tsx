import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
