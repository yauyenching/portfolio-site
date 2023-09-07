import { Box, Heading, Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import SectionHeading from "components/SectionHeading"

export default function Designs() {
  interface DesignsCardProp {
    designTitle: string,
    imageFileName: string
  }

  function DesignsCard({ designTitle, imageFileName }: DesignsCardProp){
    return (
      <GridItem
        maxW="100%" h={275}
        backgroundSize='cover'
        backgroundPosition='center'
        borderRadius={20}
        display="flex"
        alignItems='center' justifyContent='center'
        boxShadow='0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
        overflow='hidden'
      >
        <Flex 
          // w={475} h={275}
          w="100%" h="100%"
          background={`url(previews/${imageFileName})`}
          backgroundSize='cover'
          backgroundPosition='center'
          opacity={0.55}
        />
        <Heading as="h2" fontSize="lg" position='absolute' m='auto' color='brand.title'>{designTitle}</Heading>
      </GridItem>
    )
  }

  return (
    <Box>
      <SectionHeading
        sectionId={3}
        sectionTitle='Designs'
      />
      <Grid
        w="100%"
        justifyContent='space-between'
        gridTemplateColumns={{base: 'repeat(auto-fill, minmax(275px, 1fr))', md: 'repeat(2, 1fr)'}}
        rowGap={15} columnGap={15}
      >
        <DesignsCard
          designTitle="Homemates"
          imageFileName="homemates.png"
        />
        <DesignsCard
          designTitle="Gifter"
          imageFileName="gifter.png"
        />
        <DesignsCard
          designTitle="2020 W3Schools Redesign"
          imageFileName="w3schools.png"
        />
      </Grid>
    </Box>
  )
}