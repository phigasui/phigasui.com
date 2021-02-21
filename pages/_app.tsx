import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
	<script src="https://www.googleoptimize.com/optimize.js?id=OPT-WZRRPSS"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
