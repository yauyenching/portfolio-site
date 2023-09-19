import { Box, Heading, Flex, Grid, GridItem, Button, Link } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import Image from 'next/image'

export default function Designs() {
  interface DesignsCardProp {
    designTitle: string
    imageFileName: string
    designUrl: string
  }

  function DesignsCard({ designTitle, imageFileName, designUrl }: DesignsCardProp) {
    return (
      <GridItem>
        <Link
          maxW='100%'
          h={275}
          backgroundSize='cover'
          backgroundPosition='center'
          borderRadius={20}
          display='flex'
          alignItems='center'
          justifyContent='center'
          boxShadow='0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
          overflow='hidden'
          href={designUrl}
        >
          <Image
            src={`/previews/${imageFileName}`}
            alt={`Picture preview of ${designTitle} design`}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100%', opacity: 0.6, objectFit: 'cover' }}
          />
          {/* <Box
            // w={475} h={275}
            w='100%'
            h='100%'
            background={`url(previews/${imageFileName})`}
            backgroundSize='cover'
            backgroundPosition='center'
            opacity={0.55}
          /> */}
          <Heading as='h2' fontSize='xl' position='absolute' m='auto' color='brand.title'>
            {designTitle}
          </Heading>
        </Link>
      </GridItem>
    )
  }

  return (
    <Box w='100%'>
      <SectionHeading sectionId={3} sectionTitle='Designs' />
      <Grid
        justifyContent='space-between'
        gridTemplateColumns={{
          base: 'repeat(auto-fill, minmax(275px, 1fr))',
          md: 'repeat(2, 1fr)',
        }}
        rowGap={15}
        columnGap={15}
      >
        <DesignsCard
          designTitle='Homemates'
          imageFileName='homemates.webp'
          designUrl='https://www.figma.com/file/SiCr4yrw7WhOUSBh3RhHIm/Homemates?type=design&node-id=0%3A1&mode=design&t=gnMJPFg2cfc5GlHD-1'
        />
        <DesignsCard
          designTitle='Gifter'
          imageFileName='gifter.webp'
          designUrl='https://www.figma.com/file/RIeiFbqwmBOgpTVfYF5FVc/Gifter?type=design&node-id=0%3A1&mode=design&t=M3PWNWI0O3Dh93TR-1'
        />
        <DesignsCard
          designTitle='2020 W3Schools Redesign'
          imageFileName='w3schools.webp'
          designUrl='https://www.figma.com/file/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup?type=design&node-id=0%3A1&mode=design&t=RH7syUsmJefAKOuy-1'
        />
      </Grid>
    </Box>
  )
}
