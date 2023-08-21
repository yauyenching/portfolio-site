// 1. import `extendTheme` function
import { background, extendTheme, HTMLChakraProps, ThemingProps, FlexProps } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    body: `'Inter', sans-serif`
  }
})

export default theme
