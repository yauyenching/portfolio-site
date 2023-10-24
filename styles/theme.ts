// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { StyleConfig, mode } from '@chakra-ui/theme-tools'
import tabsTheme from './tabsTheme'
import cardTheme from './cardTheme'
import listTheme from './listTheme'
import modalTheme from './modalTheme'

const colors = {
  brand: {
    bg: 'var(--background)',
    body: 'var(--text-color-primary)',
    title: 'var(--text-color-title)',
    titleMuted: 'var(--text-color-title-muted)',
    accent: 'var(--accent)',
    accentFade: 'var(--accent-fade)',
    card: 'var(--card-bg)',
    gradient: 'var(--gradient)',
  },
}

const sizes = {
  contentW: '1000px',
}

const styles = {
  global: {
    'html, body': {
      color: 'brand.body',
      background: 'brand.bg',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: 'brand.title',
      fontFamily: 'heading',
    },
  },
}

const fonts = {
  heading: `'MADE Tommy Soft', "Trebuchet MS", Helvetica, sans-serif`,
  body: `'Inter', Arial, Helvetica, sans-serif`,
  mono: `'Iosevka Web', 'Fira Code', 'Fira Mono', 'Roboto Mono', "Courier New", Courier, monospace`,
}

const baseComponents: Record<string, StyleConfig> = {
  Link: {
    baseStyle: {
      textDecoration: 'underline',
      _hover: {
        color: 'brand.accent',
        transition: 'ease-out 300ms',
      },
    },
    variants: {
      header: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontFamily: 'heading',
        padding: '7.5px 0 0',
        color: 'brand.titleMuted',
        _hover: {
          color: 'brand.title',
          textDecoration: 'none',
        },
      },
      noULine: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
      footer: {
        textDecoration: 'none',
        color: 'brand.body',
        _hover: {
          textDecoration: 'none',
        },
      },
      gradient: {
        fontFamily: 'heading',
        fontWeight: 500,
        border: '3px solid',
        borderRadius: '10px',
        borderColor: 'transparent',
        background: `linear-gradient(var(--chakra-colors-brand-bg), var(--chakra-colors-brand-bg)) padding-box,
        var(--chakra-colors-brand-gradient) border-box`,
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
        '> *': {
          background: 'brand.gradient',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'brand.body',
    },
    variants: {
      noSpacing: {
        margin: '0.35em 0',
      },
    },
  },
  Button: {
    baseStyle: (props) => ({
      color: 'brand.body',
      fontFamily: 'body',
      cursor: 'pointer',
      background: mode('blackAlpha.100', 'whiteAlpha.200')(props),
      border: 'none',
      _hover: {
        background: mode('blackAlpha.200', 'whiteAlpha.300')(props)
      }
    }),
    variants: {
      gradient: {
        fontFamily: 'MADE Tommy Soft',
        fontWeight: 500,
        border: '3px solid',
        borderRadius: '10px',
        borderColor: 'transparent',
        background: `linear-gradient(var(--chakra-colors-brand-bg), var(--chakra-colors-brand-bg)) padding-box,
        var(--chakra-colors-brand-gradient) border-box`,
        '> *': {
          background: 'brand.gradient',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 500,
      color: 'brand.title',
    },
    variants: {
      subtitle: {
        color: 'brand.subtitle',
        textTransform: 'uppercase',
        marginTop: '5px',
        fontWeight: 400,
        letterSpacing: '0.025rem',
      },
      gradient: {
        background: 'brand.gradient',
        backgroundClip: 'text',
        letterSpacing: '0.065rem',
        lineHeight: '1em',
      },
      mono: {
        fontFamily: 'mono',
        textTransform: 'lowercase',
        letterSpacing: '0.025rem',
      },
    },
  },
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: fonts,
  colors: colors,
  sizes: sizes,
  styles: styles,
  components: {
    Tabs: tabsTheme,
    Card: cardTheme,
    List: listTheme,
    Modal: modalTheme,
    ...baseComponents
  },
})

export default theme
