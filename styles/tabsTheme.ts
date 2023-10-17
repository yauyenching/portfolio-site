import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

let { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    justifyContent: 'left', // change the font weight
    fontFamily: 'heading',
    color: 'brand.titleMuted',
    background: 'none',
    borderStyle: { base: 'none none solid none', sm: 'none none none solid' },
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    textAlign: 'left',
    _selected: {
      color: 'brand.title',
    },
  },
  tablist: {
    color: 'brand.titleMuted',
  },
  tabpanel: {
    padding: { base: '10px', sm: '10px 25px' },
  },
})

const tabsTheme = defineMultiStyleConfig({ baseStyle })

export default tabsTheme
