// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import "../asset/css/global.css"
import Head from '@/app/head'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;


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
