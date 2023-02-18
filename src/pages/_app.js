// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import "../asset/css/global.css"
import Head from '@/app/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
