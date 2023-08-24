// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import tabsTheme from './tabsTheme'
import cardTheme from './cardTheme'

const colors = {
    brand: {
      bg: 'var(--background)',
      body: 'var(--text-color-primary)',
      title: 'var(--text-color-title)',
      accent: 'var(--accent)',
      card: 'var(--card-bg)'
    }
}

const styles = {
  global: {
    body: {
      color: 'brand.body',
    }
  }
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    body: `'Inter', sans-serif`
  },
  colors: colors,
  styles: styles,
  components: {
    Tabs: tabsTheme,
    Card: cardTheme,
    Link: {
      baseStyle: {
        textDecoration: 'none',
      }
    },
    Text: {
      baseStyle: {
        color: 'brand.body',
      },
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
