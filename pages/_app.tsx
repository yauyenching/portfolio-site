import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
    }
  }, []);

  return (
    <ChakraBaseProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default MyApp
