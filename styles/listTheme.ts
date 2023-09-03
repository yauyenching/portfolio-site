import { listAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(listAnatomy.keys)

const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {
    padding: 0,
  },
  item: {
    lineHeight: '1.6em',
    marginInlineStart: '-0.5ch',
    paddingInlineStart: '1ch',
    '&::marker': {
      // change color for marker
      content: '"▹"',
      color: 'brand.accent',
    },
    '&:not(:last-child)': {
      marginBottom: 15, 
    }
  },
}))

const listTheme = defineMultiStyleConfig({ baseStyle })

export default listTheme