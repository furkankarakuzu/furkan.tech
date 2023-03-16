import '@/styles/reset.css'
import '@/styles/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from 'next-themes'
import Layout from './layout'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
