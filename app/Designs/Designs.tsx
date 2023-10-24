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
import { DESIGN_METADATA, DesignMetadata } from 'app/Designs/designMetadata'

// Import Design Modals
import HomematesModal from 'app/Designs/designModals/HomematesModal'
import GifterModal from 'app/Designs/designModals/GifterModal'
import W3SchoolsModal from 'app/Designs/designModals/W3SchoolsModal'
import PortfolioModal from 'app/Designs/designModals/PortfolioModal'

const { homemates, gifter, w3schools, portfolio } = DESIGN_METADATA

const motionVariants = {
  enlarge: {
    scale: 1.15,
    paddingRight: '1px',
    transition: { duration: 0.15, ease: 'easeOut' },
  },
}

export default function Designs() {
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

  function DesignsCard({ metadata, children, onOpen }: PropsWithChildren<DesignsCardProp>) {
    const { designTitle, imageFileName, prototypeLink, presentationLink, githubLink } = metadata

    const cardHoverBoxShadow = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.25)')
    const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
    const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
    const iconSize = '1.45em'

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
            cursor='pointer'
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
