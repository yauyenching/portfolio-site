import { Box, Heading, Flex, Grid, useColorModeValue } from "@chakra-ui/react"
import SectionHeading from "components/SectionHeading"

export default function Designs() {
  interface DesignsCardProp {
    designTitle: string,
    imageFileName: string
  }

  function DesignsCard({ designTitle, imageFileName }: DesignsCardProp){
    return (
      <Flex
        w={450} h={275}
        backgroundSize='cover'
        backgroundPosition='center'
        borderRadius={20}
        alignItems='center'
        justifyContent='center'
        boxShadow='0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
        overflow='hidden'
      >
        <Box 
          w='100%' h='100%'
          background={`url(previews/${imageFileName})`}
          backgroundSize='cover'
          backgroundPosition='center'
          opacity={0.55}
        />
        <Heading as="h2" fontSize="lg" position='absolute' m='auto' color='brand.title'>{designTitle}</Heading>
      </Flex>
    )
  }

  return (
    <Box w='100%' maxW='contentW'>
      <SectionHeading
        sectionId={3}
        sectionTitle='Designs'
      />
      <Grid
        justifyContent='space-between'
        gridTemplateColumns='repeat(2, 1fr)'
        rowGap={15}
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