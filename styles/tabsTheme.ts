import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

let { definePartsStyle, defineMultiStyleConfig } =
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

export default tabsTheme