import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    maxWidth: '100%',
    boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)',
    padding: '0 0 20px',
    cursor: 'pointer',
  },
  header: {
    padding: '0 0 2px',
  },
  body: {
    padding: '2px 20px 0',
  },
  footer: {
    padding: '2px 20px 0',
    textAlign: 'center',
    display: 'inline-block',
  },
})

const sizes = {
  sm: definePartsStyle({
    container: {
      backgroundColor: 'brand.card',
      borderRadius: '20px',
      overflow: 'hidden',
      minHeight: { base: 'fit-content', sm: '450px', md: '500px' },
    },
    body: {
      marginBottom: '15px',
    },
  }),
  md: definePartsStyle({
    container: {
      backgroundColor: 'brand.card',
      minHeight: { base: 'fit-content', sm: '400px' },
      borderRadius: '20px',
      overflow: 'hidden',
    },
    footer: {
      marginTop: '10px',
      textAlign: 'left',
    },
  })
}

const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })
export default cardTheme
