import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>phigasui.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="phigasui official website" key="description" />
        <meta property="og:title" content="phigasui.com" key="og:title" />
        <meta property="og:description" content="phigasui official website" key="og:description" />
        <meta property="og:image" content="/images/alpagasui.png" key="og:image" />
        <meta name="twitter:card" content="summary" key="twitter:card" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64248664-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-64248664-1');
            `
          }}>
        </script>

        <script async src="https://www.googleoptimize.com/optimize.js?id=OPT-WZRRPSS"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
