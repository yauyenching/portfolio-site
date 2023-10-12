import {
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  Link,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function Designs() {
  const cardOpacity = useColorModeValue(0.65, 0.6)

  interface DesignsCardProp {
    designTitle: string
    imageFileName: string
    designUrl: string
  }

  function DesignsCard({
    designTitle,
    imageFileName,
    designUrl,
    children,
  }: PropsWithChildren<DesignsCardProp>) {
    return (
      // <GridItem>
      //   <Flex
      //     maxW='100%'
      //     h={275}
      //     position='relative'
      //     backgroundSize='cover'
      //     backgroundPosition='center'
      //     borderRadius={20}
      //     alignItems='center'
      //     justifyContent='center'
      //     boxShadow='0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
      //     overflow='hidden'
      //     // href={designUrl}
      //   >
      //     <Flex
      //       w='100%'
      //       h='100%'
      //       justify='center'
      //       align='center'
      //       position='absolute'
      //       opacity={0}
      //       _hover={{ opacity: 1, transition: 'opacity ease 250ms'}}
      //     >
      //       <Box zIndex={2}>
      //       <Heading as='h2' display='block' fontSize='2xl' textAlign='center' color='brand.title'>
      //         {designTitle}
      //       </Heading>
      //       <Text>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend neque eu
      //         aliquet aliquet.
      //       </Text>
      //       </Box>
      //       <Box w='100%' h='100%' bg='brand.card' position='absolute' opacity={0.75}/>
      //     </Flex>
      //     <Image
      //       src={`/previews/${imageFileName}`}
      //       alt={`Picture preview of ${designTitle} design`}
      //       width={0}
      //       height={0}
      //       sizes='100vw'
      //       style={{ width: '100%', height: '100%', objectFit: 'cover'}}
      //     />
      //   </Flex>
      // </GridItem>
      <GridItem>
        <Card size='md'>
          <CardHeader>
            <Image
              src={`/previews/${imageFileName}`}
              alt={`Picture preview of ${designTitle} design`}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '275px', objectFit: 'cover' }}
            />
            <Heading as='h2' fontSize='lg' color='brand.title' my='7.5px' textAlign='center'>
              {designTitle}
            </Heading>
          </CardHeader>
          <CardBody color='brand.body' fontSize='sm'>{children}</CardBody>
        </Card>
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
        >
          A platform to find your ideal roommate using matches in living habits, interests, and lifestyle! Features a shared calendar, notes, and task system between roommates.
        </DesignsCard>
        <DesignsCard
          designTitle='Gifter'
          imageFileName='gifter.webp'
          designUrl='https://www.figma.com/file/RIeiFbqwmBOgpTVfYF5FVc/Gifter?type=design&node-id=0%3A1&mode=design&t=M3PWNWI0O3Dh93TR-1'
        >
          A personalized gift recommendation website for tracking upcoming birthdays and
          brainstorming gift ideas.
        </DesignsCard>
        <DesignsCard
          designTitle='W3Schools Redesign'
          imageFileName='w3schools.webp'
          designUrl='https://www.figma.com/file/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup?type=design&node-id=0%3A1&mode=design&t=RH7syUsmJefAKOuy-1'
        >
          A modern redesign of the 2020 W3Schools Homepage, HTML/CSS Course, and About pages.
        </DesignsCard>
        <DesignsCard
          designTitle='Personal Portfolio Site'
          imageFileName='portfolio.webp'
          designUrl='https://www.figma.com/file/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio?type=design&node-id=0%3A1&mode=design&t=tiS1haV32dUR1HtT-1'
          >
          The hi-fidelity prototype for my personal portfolio site.
        </DesignsCard>
      </Grid>
    </Box>
  )
}
