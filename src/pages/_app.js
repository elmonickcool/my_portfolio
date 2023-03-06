// pages/_app.js
import { ChakraProvider, Box } from '@chakra-ui/react'
import Layout from '../components/Layout'
import "../asset/css/global.css"
import Head from '@/app/head'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import theme from '@/components/ui/theme'
import { useColorMode } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'

// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true) // <-- move state initialization here
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const { colorMode } = useColorMode()
  const color = colorMode === "light" ? "gray.800" : "white"
  const spinnerColor = colorMode === "light" ? "gray.800" : "white"
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Layout bg="white" color={color}>
        {loading ? (
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PropagateLoader color={spinnerColor} size={20} />
          </Box>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp


