import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: 'brand.card',
    padding: '0 0 25px',
    boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
  },
  header: {
    padding: '0 0 2px',
  },
  body: {
    padding: '2px 25px 0',
  },
  footer: {
    padding: '2px 25px 0',
    justifyContent: "center",
    display: 'flex',
    columnGap: '5px'
  },
})

const sizes = {
  sm: definePartsStyle({
    container: {
      borderRadius: '20px',
      maxWidth: '100%',
      height: { base:'fit-content', sm: '425px'}
    },
  }),
}

// const variants = {
//   definePartsStyle({
//   // define the part you're going to style
//   container: {
//     backgroundColor: 'brand.card',
//     padding: '0 0 25px',
//     boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
//   },
//   header: {
//     padding: '0 0 2px',
//   },
//   body: {
//     padding: '2px 25px 0',
//   },
//   footer: {
//     padding: '2px 25px 0',
//     justifyContent: "center",
//     display: 'flex',
//     columnGap: '5px'
//   }
// })
// }

const cardTheme = defineMultiStyleConfig({ baseStyle, sizes })
export default cardTheme