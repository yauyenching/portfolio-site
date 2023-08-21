import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from './theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default MyApp
