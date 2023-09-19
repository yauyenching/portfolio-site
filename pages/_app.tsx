import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
      <Script async src='https://kit.fontawesome.com/c0cc8a8286.js' crossOrigin='anonymous' />
    </ChakraBaseProvider>
  )
}

export default MyApp
