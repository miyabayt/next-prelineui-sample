import '@/styles/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import type { ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {})

  return getLayout(
    <>
      <Script src='/hs-ui.bundle.js' />
      <Component {...pageProps} />
    </>,
  )
}

export default MyApp
