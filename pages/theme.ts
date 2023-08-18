// 1. import `extendTheme` function
import { background, extendTheme, HTMLChakraProps, ThemingProps, FlexProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import brand from '../styles/variables.module.scss';
import { StyleConfig } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// const styles = {
//   global: (props: StyleFunctionProps) => ({
//     body: {
//       bg: mode(brand.lightBg, brand.darkBg)(props),
//     },
//   })
// }

// // 1. define component configuration
// const components: Record<string, StyleConfig> = {
//   NavBar: {
//     baseStyle: ({ colorMode }) => ({
//       bg: colorMode === "dark" ? brand.darkBg : brand.lightBg,
//       letterSpacing: "0.05em",
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       top: 0,
//       left: 0,
//       position: 'fixed',
//       width: '100%',
//       height: '50px'
//     })
//   },
//   Link: {
//     baseStyle: ({ colorMode }) => ({
//       fontSize: '16px',
//       textTransform: 'uppercase',
//       padding: '7.5px 0px 0px',
//       fontFamily: brand.headerLinkFont,
//       color: colorMode === "dark" ? brand.headerLinkDark : brand.headerLinkLight,
//       _hover: {
//         color: colorMode === "dark" ? brand.headerLinkFocusDark : brand.headerLinkFocusLight,
//         textDecoration: 'none',
//         transition: 'color 350ms ease'
//       }
//     })
//   }
// };

// 3. extend the theme
const theme = extendTheme({ config })

export interface NavBarProps
  extends HTMLChakraProps<'div'>, ThemingProps {}

export interface HeaderLinkProps
  extends HTMLChakraProps<'a'>, ThemingProps {}

export default theme
