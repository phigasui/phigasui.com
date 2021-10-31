import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>phigasui.com</title>
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

        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-WZRRPSS"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
