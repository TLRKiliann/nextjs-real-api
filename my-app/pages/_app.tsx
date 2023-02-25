import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "@fontsource/noto-sans-newa"
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

/*import type { AppProps } from 'next/app'
import "@fontsource/noto-sans-newa"
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}*/
