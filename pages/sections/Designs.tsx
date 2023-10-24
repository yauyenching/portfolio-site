import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Link,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure,
  UseDisclosureProps,
  LinkProps,
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FigmaIcon from 'public/assets/FigmaIcon'
import PresentationPlay from 'public/assets/PresentationPlay'
import GitHubIcon from 'public/assets/GitHubIcon'
import { PropsWithChildren, ReactNode } from 'react'

// Import Design Modals
import HomematesModal from 'pages/designModals/HomematesModal'
import GifterModal from 'pages/designModals/GifterModal'
import W3SchoolsModal from 'pages/designModals/W3SchoolsModal'
import PortfolioModal from 'pages/designModals/PortfolioModal'

export type DesignMetadata = {
  designTitle: string
  prototypeLink: string
  presentationLink: string
  imageFileName?: string
  caseStudy?: string
  caseStudyIsLink?: boolean
  githubLink?: string
  demoLink?: string
}

export const DESIGN_METADATA: Record<string, DesignMetadata> = {
  homemates: {
    designTitle: 'Homemates',
    imageFileName: 'homemates.webp',
    prototypeLink:
      'https://www.figma.com/file/SiCr4yrw7WhOUSBh3RhHIm/Homemates',
    presentationLink:
      'https://www.figma.com/proto/SiCr4yrw7WhOUSBh3RhHIm/Homemates?node-id=1%3A38&viewport=-186%2C113%2C0.38197198510169983&scaling=scale-down',
    caseStudy: 'Yau Yen Ching_Case Study_Homemates.pdf',
  },
  gifter: {
    designTitle: 'Gifter',
    imageFileName: 'gifter.webp',
    prototypeLink: 'https://www.figma.com/file/RIeiFbqwmBOgpTVfYF5FVc/Gifter',
    presentationLink:
      'https://www.figma.com/proto/RIeiFbqwmBOgpTVfYF5FVc/Gifter?node-id=19-480&scaling=scale-down-width',
    caseStudy: 'https://gifterwebsite.wordpress.com/',
    caseStudyIsLink: true,
    demoLink: 'https://youtu.be/yTwfodhltKY?si=ut34AW7QTtlLKJDs',
  },
  w3schools: {
    designTitle: 'W3Schools Redesign',
    imageFileName: 'w3schools.webp',
    prototypeLink:
      'https://www.figma.com/file/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup',
    presentationLink:
      'https://www.figma.com/proto/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup?node-id=1-2&viewport=372%2C62%2C0.22146402299404144&scaling=scale-down-width&starting-point-node-id=1%3A2',
    caseStudy: 'Yau Yen Ching_Case Study_W3Schools Redesign.pdf',
  },
  portfolio: {
    designTitle: 'Personal Portfolio',
    imageFileName: 'portfolio.webp',
    prototypeLink:
      'https://www.figma.com/file/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio',
    presentationLink:
      'https://www.figma.com/proto/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&hide-ui=1',
    githubLink: 'https://github.com/yauyenching/portfolio-site',
  },
}

const { homemates, gifter, w3schools, portfolio } = DESIGN_METADATA

export function Designs() {
  // states for modals
  const {
    isOpen: HomematesIsOpen,
    onOpen: HomematesOnOpen,
    onClose: HomematesOnClose,
  } = useDisclosure()
  const { isOpen: GifterIsOpen, onOpen: GifterOnOpen, onClose: GifterOnClose } = useDisclosure()
  const {
    isOpen: W3SchoolsIsOpen,
    onOpen: W3SchoolsOnOpen,
    onClose: W3SchoolsOnClose,
  } = useDisclosure()
  const {
    isOpen: PortfolioIsOpen,
    onOpen: PortfolioOnOpen,
    onClose: PortfolioOnClose,
  } = useDisclosure()

  interface DesignCardLinkProps extends LinkProps {
    icon: ReactNode
  }

  interface DesignsCardProp extends UseDisclosureProps {
    metadata: DesignMetadata
  }

  function DesignsCard({ metadata, children, onOpen }: PropsWithChildren<DesignsCardProp>) {
    const { designTitle, imageFileName, prototypeLink, presentationLink, githubLink } = metadata

    const cardHoverBoxShadow = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.25)')
    const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
    const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
    const iconSize = '1.45em'

    const motionVariants = {
      enlarge: {
        scale: 1.15,
        paddingRight: '1px',
        transition: { duration: 0.15, ease: 'easeOut' },
      },
    }

    function DesignCardLink({ icon, href }: DesignCardLinkProps) {
      return (
        <Link
          isExternal
          as={motion.a}
          variants={motionVariants}
          whileHover='enlarge'
          className='hyperlink'
          href={href}
          color='brand.title'
        >
          {icon}
        </Link>
      )
    }

    return (
      <>
        <GridItem>
          <Card
            role='group'
            size='md'
            as={motion.div}
            whileHover={{
              scale: 1.035,
              boxShadow: `0px 6px 36px 8px ${cardHoverBoxShadow}`,
              transition: { duration: 0.25, ease: 'easeInOut' },
            }}
            onClick={onOpen}
            cursor={onOpen ? 'pointer' : 'auto'}
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
                {designTitle}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text as='span' fontSize='sm'>
                {children}
              </Text>
            </CardBody>
            <CardFooter>
              <HStack spacing='0.25rem' flexDir='row-reverse' float='left'>
                <DesignCardLink href={prototypeLink} icon={<FigmaIcon boxSize={iconSize} />} />
                <DesignCardLink
                  href={presentationLink}
                  icon={<PresentationPlay boxSize={iconSize} />}
                />
                {githubLink && <DesignCardLink href={githubLink} icon={<GitHubIcon boxSize='1.6em' />} />}
                {onOpen && (
                  <Button
                    bg={defaultBtnStyle}
                    fontSize='sm'
                    color='brand.title'
                    _groupHover={{
                      background: hoverBtnStyle,
                    }}
                    sx={{
                      fontFeatureSettings: `'ss01', 'cv11'`,
                      '.hyperlink:hover ~ &': {
                        background: defaultBtnStyle,
                      },
                    }}
                    onClick={onOpen}
                  >
                    Read More
                  </Button>
                )}
              </HStack>
            </CardFooter>
          </Card>
        </GridItem>
      </>
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
        <DesignsCard metadata={homemates} onOpen={HomematesOnOpen}>
          A platform to find your ideal roommate using matches in living habits, interests, and
          lifestyle! Features a shared calendar, notes, and task system between roommates.
        </DesignsCard>
        <DesignsCard metadata={gifter} onOpen={GifterOnOpen}>
          A personalized gift recommendation website for tracking upcoming birthdays and
          brainstorming gift ideas.
        </DesignsCard>
        <DesignsCard metadata={w3schools} onOpen={W3SchoolsOnOpen}>
          A modern redesign of the 2020 W3Schools Homepage, HTML/CSS Course, and About pages.
        </DesignsCard>
        <DesignsCard metadata={portfolio} onOpen={PortfolioOnOpen}>
          The code repo and hi-fidelity design for my personal portfolio site.
        </DesignsCard>
      </Grid>
      <HomematesModal isOpen={HomematesIsOpen} onClose={HomematesOnClose} />
      <GifterModal isOpen={GifterIsOpen} onClose={GifterOnClose} />
      <W3SchoolsModal isOpen={W3SchoolsIsOpen} onClose={W3SchoolsOnClose} />
      <PortfolioModal isOpen={PortfolioIsOpen} onClose={PortfolioOnClose} />
    </Box>
  )
}
