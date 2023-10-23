import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: 'blackAlpha.600', //change the background
  },
  dialog: {
    bg: 'brand.bg',
    borderRadius: '2xl',
  },
  header: {
    fontFamily: 'heading',
    color: 'brand.title',
    fontWeight: 500,
  },
  // closeButton: {
  //   background: mode('blackAlpha.50', 'whiteAlpha.200')(props),
  //     border: 'none',
  //     _hover: {
  //       background: mode('blackAlpha.200', 'whiteAlpha.300')(props)
  //     }
  // }
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})

export default modalTheme