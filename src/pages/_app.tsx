import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from '../../components/header'
import { Inter } from 'next/font/google'

const queryClient = new QueryClient()
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head>
          <title>Nomadmarket</title>
        </Head>
        <Header/>
        <Component {...pageProps} />
      </>
      
    </QueryClientProvider>
  )
}