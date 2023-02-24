import type { AppProps } from 'next/app'
import "@fontsource/noto-sans-newa"
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
