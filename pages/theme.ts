// 1. import `extendTheme` function
import { background, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import brand from '../styles/variables.module.scss';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  }
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(brand.lightBg, brand.darkBg)(props),
    }
  })
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme