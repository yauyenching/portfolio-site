// 1. import `extendTheme` function
import { background, extendTheme, HTMLChakraProps, ThemingProps, FlexProps } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    justifyContent: 'left', // change the font weight
  },
  tabpanel: {
    padding: '10px 25px'
  }
})

const tabsTheme = defineMultiStyleConfig({ baseStyle })

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    body: `'Inter', sans-serif`
  },
  colors: {
    brand: {
      bg: 'var(--background)',
      body: 'var(--text-color-primary)',
      title: 'var(--text-color-title)',
      accent: 'var(--accent)',
    }
  },
  components: {
    Tabs: tabsTheme,
    Link: {
      baseStyle: {
        textDecoration: 'none',
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: 'MADE Tommy Soft',
        fontWeight: 500,
        color: 'brand.title',
      },
      variants: {
        subtitle: {
          color: 'brand.subtitle',
          textTransform: 'uppercase',
          marginTop: '5px',
          fontWeight: 400,
          letterSpacing: '0.025em',
        }
      }
    }
  }
})

export default theme
