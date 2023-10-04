import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from '../../components/header'
import { Inter } from 'next/font/google'
import { store } from '../store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <>
          <Head>
            <title>Nomadmarket</title>
          </Head>
          <Header/>
          <Component {...pageProps} />
        </>
        
      </QueryClientProvider>
    </Provider>
  )
}