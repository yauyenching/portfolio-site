import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

let { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    justifyContent: 'left', // change the font weight
    fontFamily: 'heading',
    background: 'none',
    border: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    textAlign: 'left',
    opacity: 0.5,
    _selected: {
      color: 'brand.title',
      opacity: 1,
    },
  },
  tabpanel: {
    padding: '10px 25px',
  },
})

const tabsTheme = defineMultiStyleConfig({ baseStyle })

export default tabsTheme
