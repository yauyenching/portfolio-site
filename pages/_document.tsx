import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://rsms.me/' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
