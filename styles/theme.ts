// 1. import `extendTheme` function
import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import tabsTheme from './tabsTheme';
import cardTheme from './cardTheme';
import listTheme from './listTheme';

const colors = {
  brand: {
    bg: 'var(--background)',
    body: 'var(--text-color-primary)',
    title: 'var(--text-color-title)',
    accent: 'var(--accent)',
    accentFade: 'var(--accent-fade)',
    card: 'var(--card-bg)',
    gradient: 'var(--gradient)',
    headerLink: 'var(--text-color-header-link)',
  },
};

const sizes = {
  contentW: '1000px',
};

const styles = {
  global: {
    body: {
      color: 'brand.body',
      background: 'brand.bg',
    },
  },
};

const fonts = {
  heading: `'MADE Tommy Soft', "Trebuchet MS", Helvetica, sans-serif`,
  body: `'Inter', Arial, Helvetica, sans-serif`,
  mono: `'Iosevka', 'Fira Code', 'Fira Mono', 'Roboto Mono', "Courier New", Courier, monospace`,
};

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: fonts,
  colors: colors,
  sizes: sizes,
  styles: styles,
  components: {
    Tabs: tabsTheme,
    Card: cardTheme,
    List: listTheme,
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
          color: 'brand.headerLink',
          _hover: {
            color: 'brand.title',
            textDecoration: 'none',
          },
        },
        stats: {
          textDecoration: 'none',
          _hover: {
            textDecoration: 'none',
          },
        }
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
  },
});

export default theme;
