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
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function Designs() {
  // const cardOpacity = useColorModeValue(0.65, 0.6)
  
  interface DesignsCardProp {
    designTitle: string
    imageFileName: string
    designLink: string
  }

  function DesignsCard({
    designTitle,
    imageFileName,
    designLink,
    children,
  }: PropsWithChildren<DesignsCardProp>) {
    const cardBoxShadow = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.25)')

    return (
      <GridItem>
        <LinkBox>
          <Card
            size='md'
            as={motion.div}
            whileHover={{ scale: 1.035, boxShadow: `0px 6px 36px 8px ${cardBoxShadow}`,
            transition: { duration: 0.25, ease: 'easeInOut' }, }}
          >
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
                <LinkOverlay href={designLink}>{designTitle}</LinkOverlay>
              </Heading>
            </CardHeader>
            <CardBody>
              <Text as='span' fontSize='sm'>
                {children}
              </Text>
            </CardBody>
          </Card>
        </LinkBox>
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
          designLink='https://www.figma.com/file/SiCr4yrw7WhOUSBh3RhHIm/Homemates?type=design&node-id=0%3A1&mode=design&t=gnMJPFg2cfc5GlHD-1'
        >
          A platform to find your ideal roommate using matches in living habits, interests, and
          lifestyle! Features a shared calendar, notes, and task system between roommates.
        </DesignsCard>
        <DesignsCard
          designTitle='Gifter'
          imageFileName='gifter.webp'
          designLink='https://www.figma.com/file/RIeiFbqwmBOgpTVfYF5FVc/Gifter?type=design&node-id=0%3A1&mode=design&t=M3PWNWI0O3Dh93TR-1'
        >
          A personalized gift recommendation website for tracking upcoming birthdays and
          brainstorming gift ideas.
        </DesignsCard>
        <DesignsCard
          designTitle='W3Schools Redesign'
          imageFileName='w3schools.webp'
          designLink='https://www.figma.com/file/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup?type=design&node-id=0%3A1&mode=design&t=RH7syUsmJefAKOuy-1'
        >
          A modern redesign of the 2020 W3Schools Homepage, HTML/CSS Course, and About pages.
        </DesignsCard>
        <DesignsCard
          designTitle='Personal Portfolio Site'
          imageFileName='portfolio.webp'
          designLink='https://www.figma.com/file/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio?type=design&node-id=0%3A1&mode=design&t=tiS1haV32dUR1HtT-1'
        >
          The hi-fidelity prototype for my personal portfolio site.
        </DesignsCard>
      </Grid>
    </Box>
  )
}
