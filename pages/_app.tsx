import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
