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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CardFooter,
  HStack,
} from '@chakra-ui/react'
import { createIcon } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import Image from 'next/image'
import { PropsWithChildren, useRef } from 'react'
import { motion } from 'framer-motion'
import PresentationPlay from 'public/assets/PresentationPlay'
import FigmaIcon from 'public/assets/FigmaIcon'

export default function Designs() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
    const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

    const motionVariants = {
      enlarge: {
        scale: 1.15,
        paddingRight: '1px',
        transition: { duration: 0.15, ease: 'easeOut' }
      }
    }

    return (
      <GridItem>
        <LinkBox>
          <Card
            role='group'
            size='md'
            as={motion.div}
            whileHover={{
              scale: 1.035,
              boxShadow: `0px 6px 36px 8px ${cardBoxShadow}`,
              transition: { duration: 0.25, ease: 'easeInOut' },
            }}
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
            <CardFooter>
              <HStack spacing='0.25rem' flexDir='row-reverse' float='left'>
                <Link
                  as={motion.a}
                  variants={motionVariants}
                  whileHover='enlarge'
                  className='hyperlink'
                  href='#'
                  color='brand.title'
                >
                  <PresentationPlay boxSize='1.45em' />
                </Link>
                <Link
                  as={motion.a}
                  variants={motionVariants}
                  whileHover='enlarge'
                  className='hyperlink'
                  href='#'
                  color='brand.title'
                >
                  <FigmaIcon boxSize='1.45em' />
                </Link>
                <Button
                  background={defaultBtnStyle}
                  border='none'
                  fontSize='sm'
                  color='brand.title'
                  _groupHover={{
                    // color: 'brand.accent',
                    background: hoverBtnStyle,
                  }}
                  sx={{
                    fontFeatureSettings: `'ss01', 'cv11'`,
                    '.hyperlink:hover ~ &': {
                      background: defaultBtnStyle,
                    },
                  }}
                >
                  Read More
                </Button>
              </HStack>
            </CardFooter>
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
