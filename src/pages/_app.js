// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import "../asset/css/global.css"
import Head from '@/app/head'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import theme from '@/components/ui/theme'
import { useColorModeValue } from '@chakra-ui/react'
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue("white","gray.800")
  const color = useColorModeValue("gray.800","white")
  return (
    <ChakraProvider theme={theme}>
      <Head/>
      <Layout bg={bg} color={color}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
